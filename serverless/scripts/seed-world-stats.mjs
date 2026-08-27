import { catalog } from '../catalog.js';

const DEFAULT_ENDPOINT = 'https://functions.yandexcloud.net/d4evbrolc6s5rr4jhusq';
const SEED_PLAYER_ID = 'initial-seed-v1';
const VOTES_PER_CATEGORY = 200;
const BATCH_SIZE = 100;
const MAX_ATTEMPTS = 5;

function getArgument(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : null;
}

function hashToUnit(value) {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 4294967296;
}

function createVotes(categoryId, items) {
  return Array.from({ length: VOTES_PER_CATEGORY }, (_, voteIndex) => {
    const leftIndex = voteIndex % items.length;
    const offset = 1 + (Math.floor(voteIndex / items.length) % (items.length - 1));
    const rightIndex = (leftIndex + offset) % items.length;
    const leftStrength = 1 - (leftIndex / Math.max(1, items.length - 1));
    const rightStrength = 1 - (rightIndex / Math.max(1, items.length - 1));
    const leftWinChance = Math.max(
      0.18,
      Math.min(0.82, 0.5 + ((leftStrength - rightStrength) * 0.42)),
    );
    const leftWins = hashToUnit(`${categoryId}:${voteIndex}`) < leftWinChance;

    return leftWins
      ? { winnerId: items[leftIndex], loserId: items[rightIndex] }
      : { winnerId: items[rightIndex], loserId: items[leftIndex] };
  });
}

function createBatches(categoryId, votes) {
  const batches = [];
  for (let index = 0; index < votes.length; index += BATCH_SIZE) {
    const batchNumber = (index / BATCH_SIZE) + 1;
    batches.push({
      id: `seed-v1-${categoryId}-${batchNumber}`,
      categoryId,
      votes: votes.slice(index, index + BATCH_SIZE),
    });
  }
  return batches;
}

async function sendBatch(endpoint, batch) {
  let lastError;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerId: SEED_PLAYER_ID,
          categoryVersions: {},
          pendingBatches: [batch],
          includeSnapshot: false,
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${JSON.stringify(result)}`);
      }
      if (!result.acceptedBatchIds?.includes(batch.id)) {
        throw new Error(`Batch ${batch.id} was not acknowledged`);
      }
      return;
    } catch (error) {
      lastError = error;
      if (attempt < MAX_ATTEMPTS) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
      }
    }
  }
  throw lastError;
}

async function main() {
  const endpoint = getArgument('--endpoint') || process.env.WORLD_STATS_URL || DEFAULT_ENDPOINT;
  const dryRun = process.argv.includes('--dry-run');
  let batchCount = 0;

  for (const [categoryId, items] of Object.entries(catalog)) {
    const batches = createBatches(categoryId, createVotes(categoryId, items));
    batchCount += batches.length;
    if (!dryRun) {
      for (const batch of batches) await sendBatch(endpoint, batch);
      console.log(`Seeded ${categoryId}: ${VOTES_PER_CATEGORY} votes`);
    }
  }

  const categoryCount = Object.keys(catalog).length;
  console.log(`${dryRun ? 'Dry run' : 'Done'}: ${categoryCount} categories, ${batchCount} batches, ${categoryCount * VOTES_PER_CATEGORY} votes`);
}

await main();
