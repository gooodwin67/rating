const WORLD_STATS_URL = import.meta.env.VITE_WORLD_STATS_URL
  || 'https://functions.yandexcloud.net/d4evbrolc6s5rr4jhusq';
const SYNC_INTERVAL_MS = 24 * 60 * 60 * 1000;
const REQUEST_TIMEOUT_MS = 10000;
const MAX_BATCHES_PER_REQUEST = 8;

let activeSync = null;

function ensureWorldStatsState(state) {
  state.worldStats = state.worldStats && typeof state.worldStats === 'object'
    ? state.worldStats
    : {};
  state.worldStats.lastSyncAt = Number(state.worldStats.lastSyncAt) || 0;
  state.worldStats.categoryVersions = state.worldStats.categoryVersions ?? {};
  state.worldStats.categories = state.worldStats.categories ?? {};
  state.pendingVoteBatches = Array.isArray(state.pendingVoteBatches)
    ? state.pendingVoteBatches
    : [];
  return state.worldStats;
}

export function getEffectiveCategoryRatings(state, categoryId) {
  const localRatings = state.itemRatings?.[categoryId] ?? {};
  const worldRatings = state.worldStats?.categories?.[categoryId]?.items ?? {};
  return { ...localRatings, ...worldRatings };
}

export function queueSessionVotes(state, session) {
  if (!session?.sessionId || !session?.categoryId) return false;

  ensureWorldStatsState(state);
  if (state.pendingVoteBatches.some((batch) => batch.id === session.sessionId)) return false;

  const votes = (state.matchHistory ?? [])
    .filter((entry) => entry.sessionId === session.sessionId)
    .map((entry) => ({
      winnerId: entry.chosenItemId,
      loserId: entry.loserItemId,
    }));

  if (!votes.length) return false;

  state.pendingVoteBatches.push({
    id: session.sessionId,
    categoryId: session.categoryId,
    votes,
    queuedAt: Date.now(),
  });
  return true;
}

async function requestSync(state, { forceSnapshot = false } = {}) {
  const worldStats = ensureWorldStatsState(state);
  const now = Date.now();
  const snapshotDue = forceSnapshot || now - worldStats.lastSyncAt >= SYNC_INTERVAL_MS;
  const pendingBatches = state.pendingVoteBatches.slice(0, MAX_BATCHES_PER_REQUEST);

  if (!snapshotDue && !pendingBatches.length) {
    return { attempted: false, changed: false };
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(WORLD_STATS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        playerId: state.player.id,
        categoryVersions: worldStats.categoryVersions,
        pendingBatches,
        includeSnapshot: snapshotDue,
      }),
      credentials: 'omit',
      signal: controller.signal,
    });

    if (!response.ok) throw new Error(`World stats sync failed: ${response.status}`);
    const data = await response.json();
    const acceptedIds = new Set(data.acceptedBatchIds ?? []);

    state.pendingVoteBatches = state.pendingVoteBatches.filter(
      (batch) => !acceptedIds.has(batch.id),
    );

    if (snapshotDue) {
      for (const [categoryId, categoryData] of Object.entries(data.categories ?? {})) {
        worldStats.categories[categoryId] = categoryData;
      }
      worldStats.categoryVersions = {
        ...worldStats.categoryVersions,
        ...(data.categoryVersions ?? {}),
      };
      worldStats.lastSyncAt = Number(data.syncedAt) || now;
    }

    return {
      attempted: true,
      changed: acceptedIds.size > 0 || Object.keys(data.categories ?? {}).length > 0,
      snapshotUpdated: snapshotDue,
    };
  } catch (error) {
    console.warn('World statistics are temporarily unavailable; using local data', error);
    return { attempted: true, changed: false, offline: true };
  } finally {
    window.clearTimeout(timeout);
  }
}

export function syncWorldStats(state, options) {
  if (!activeSync) {
    activeSync = requestSync(state, options).finally(() => {
      activeSync = null;
    });
  }
  return activeSync;
}
