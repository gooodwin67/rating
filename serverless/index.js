import { Driver } from '@ydbjs/core';
import { query } from '@ydbjs/query';
import { MetadataCredentialsProvider } from '@ydbjs/auth/metadata';
import { Uint32, Uint64 } from '@ydbjs/value/primitive';
import { catalog } from './catalog.js';

const MAX_BODY_BYTES = 64 * 1024;
const MAX_BATCHES = 8;
const MAX_VOTES_PER_BATCH = 100;
const ID_PATTERN = /^[a-zA-Z0-9_-]{1,120}$/;
const STATS_SCHEMA_VERSION = 2;
const DEFAULT_ELO_RATING = 1500;
const ELO_K_FACTOR = 32;

let driverPromise;
let sqlClient;

function response(statusCode, data, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      ...extraHeaders,
    },
    body: JSON.stringify(data),
    isBase64Encoded: false,
  };
}

function getConnectionString() {
  const connectionString = process.env.YDB_CONNECTION_STRING;
  if (!connectionString) {
    throw new Error('YDB_CONNECTION_STRING is not configured');
  }
  return connectionString;
}

async function getSql() {
  if (sqlClient) return sqlClient;

  if (!driverPromise) {
    const driver = new Driver(getConnectionString(), {
      credentialsProvider: new MetadataCredentialsProvider(),
    });
    driverPromise = driver.ready().then(() => driver);
  }

  const driver = await driverPromise;
  sqlClient = query(driver, { poolOptions: { maxSize: 4 } });
  return sqlClient;
}

function decodeBody(event) {
  const encoded = event?.body ?? '';
  const raw = event?.isBase64Encoded
    ? Buffer.from(encoded, 'base64').toString('utf8')
    : encoded;

  if (Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
    throw new RangeError('Request body is too large');
  }

  return raw ? JSON.parse(raw) : {};
}

function isValidId(value) {
  return typeof value === 'string' && ID_PATTERN.test(value);
}

function normalizeVersions(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value)
      .filter(([categoryId, version]) => (
        Object.hasOwn(catalog, categoryId)
        && Number.isSafeInteger(version)
        && version >= 0
      )),
  );
}

function validateBatch(batch) {
  if (!batch || typeof batch !== 'object') throw new TypeError('Invalid vote batch');
  if (!isValidId(batch.id)) throw new TypeError('Invalid batch id');
  if (!isValidId(batch.categoryId) || !Object.hasOwn(catalog, batch.categoryId)) {
    throw new TypeError('Unknown category');
  }
  if (!Array.isArray(batch.votes) || batch.votes.length < 1) {
    throw new TypeError('Vote batch is empty');
  }
  if (batch.votes.length > MAX_VOTES_PER_BATCH) {
    throw new RangeError('Too many votes in one batch');
  }

  const allowedItems = new Set(catalog[batch.categoryId]);
  const votes = batch.votes.map((vote) => {
    const winnerId = vote?.winnerId;
    const loserId = vote?.loserId;
    if (
      !isValidId(winnerId)
      || !isValidId(loserId)
      || winnerId === loserId
      || !allowedItems.has(winnerId)
      || !allowedItems.has(loserId)
    ) {
      throw new TypeError('Vote contains unknown items');
    }
    return { winnerId, loserId };
  });

  return { id: batch.id, categoryId: batch.categoryId, votes };
}

function normalizeRequest(body) {
  if (!isValidId(body?.playerId)) throw new TypeError('Invalid player id');

  const batches = body.pendingBatches ?? [];
  if (!Array.isArray(batches) || batches.length > MAX_BATCHES) {
    throw new RangeError('Too many pending batches');
  }

  return {
    playerId: body.playerId,
    categoryVersions: normalizeVersions(body.categoryVersions),
    batches: batches.map(validateBatch),
    includeSnapshot: body.includeSnapshot !== false,
  };
}

function hashString(value = '') {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function getInitialEloRating(itemId) {
  return DEFAULT_ELO_RATING + ((hashString(itemId) / 0xffffffff) - 0.5) * 300;
}

function getExpectedWinChance(rating, opponentRating) {
  return 1 / (1 + 10 ** ((opponentRating - rating) / 400));
}

function emptyItemStats(itemId) {
  return {
    rating: getInitialEloRating(itemId),
    wins: 0,
    losses: 0,
    shown: 0,
    chosen: 0,
  };
}

function applyVotes(stats, votes) {
  for (const { winnerId, loserId } of votes) {
    const winner = stats[winnerId] ?? emptyItemStats(winnerId);
    const loser = stats[loserId] ?? emptyItemStats(loserId);
    const winnerExpected = getExpectedWinChance(winner.rating, loser.rating);
    const loserExpected = 1 - winnerExpected;

    winner.rating += ELO_K_FACTOR * (1 - winnerExpected);
    winner.wins += 1;
    winner.shown += 1;
    winner.chosen += 1;

    loser.rating += ELO_K_FACTOR * (0 - loserExpected);
    loser.losses += 1;
    loser.shown += 1;

    stats[winnerId] = winner;
    stats[loserId] = loser;
  }
}

function toNumber(value) {
  return typeof value === 'bigint' ? Number(value) : Number(value ?? 0);
}

async function applyBatch(sql, playerId, batch) {
  return sql.begin(async (tx) => {
    const [knownBatches = []] = await tx`
      SELECT batch_id
      FROM vote_batches
      WHERE player_id = ${playerId} AND batch_id = ${batch.id}
      LIMIT 1
    `;

    if (knownBatches.length) return false;

    const [categoryRows = []] = await tx`
      SELECT version, payload_json
      FROM category_stats
      WHERE category_id = ${batch.categoryId}
      LIMIT 1
    `;

    const current = categoryRows[0];
    const version = toNumber(current?.version) + 1;
    const payload = current?.payload_json ? JSON.parse(current.payload_json) : null;
    // Version 1 was test data based on raw win percentages; intentionally discard it.
    const stats = payload?.schemaVersion === STATS_SCHEMA_VERSION ? payload.items : {};
    const now = Date.now();

    applyVotes(stats, batch.votes);

    await tx`
      UPSERT INTO category_stats (
        category_id,
        version,
        payload_json,
        updated_at
      ) VALUES (
        ${batch.categoryId},
        ${new Uint64(BigInt(version))},
        ${JSON.stringify({ schemaVersion: STATS_SCHEMA_VERSION, items: stats })},
        ${new Uint64(BigInt(now))}
      )
    `;

    await tx`
      INSERT INTO vote_batches (
        player_id,
        batch_id,
        category_id,
        vote_count,
        received_at
      ) VALUES (
        ${playerId},
        ${batch.id},
        ${batch.categoryId},
        ${new Uint32(batch.votes.length)},
        ${new Uint64(BigInt(now))}
      )
    `;

    return true;
  });
}

async function loadChangedCategories(sql, knownVersions) {
  const [rows = []] = await sql`
    SELECT category_id, version, payload_json, updated_at
    FROM category_stats
  `.isolation('onlineReadOnly', { allowInconsistentReads: true }).idempotent(true);

  const categories = {};
  const categoryVersions = {};

  for (const row of rows) {
    const version = toNumber(row.version);
    categoryVersions[row.category_id] = version;

    const payload = JSON.parse(row.payload_json);
    if (payload?.schemaVersion !== STATS_SCHEMA_VERSION) continue;

    if ((knownVersions[row.category_id] ?? 0) < version) {
      categories[row.category_id] = {
        version,
        updatedAt: toNumber(row.updated_at),
        schemaVersion: STATS_SCHEMA_VERSION,
        items: payload.items,
      };
    }
  }

  return { categories, categoryVersions };
}

export async function handler(event) {
  const method = event?.httpMethod ?? event?.requestContext?.http?.method;
  if (method === 'OPTIONS') return response(204, null);
  if (method !== 'POST') return response(405, { error: 'method_not_allowed' });

  try {
    const request = normalizeRequest(decodeBody(event));
    const sql = await getSql();
    const acceptedBatchIds = [];

    for (const batch of request.batches) {
      const applied = await applyBatch(sql, request.playerId, batch);
      acceptedBatchIds.push(batch.id);
      if (!applied) console.info('Duplicate vote batch ignored', batch.id);
    }

    const snapshot = request.includeSnapshot
      ? await loadChangedCategories(sql, request.categoryVersions)
      : { categories: {}, categoryVersions: request.categoryVersions };
    return response(200, {
      acceptedBatchIds,
      ...snapshot,
      syncedAt: Date.now(),
    });
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof TypeError || error instanceof RangeError) {
      return response(400, { error: 'invalid_request', message: error.message });
    }

    console.error('World stats sync failed', error);
    return response(503, { error: 'service_unavailable' }, { 'Retry-After': '60' });
  }
}
