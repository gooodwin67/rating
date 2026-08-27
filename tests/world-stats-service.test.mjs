import assert from 'node:assert/strict';
import test from 'node:test';

globalThis.window = {
  setTimeout,
  clearTimeout,
};

const {
  getEffectiveCategoryRatings,
  queueSessionVotes,
  syncWorldStats,
} = await import('../src/game/world-stats-service.js');

function createState() {
  return {
    player: { id: 'test-player' },
    itemRatings: {
      frukty: {
        yabloko: { rating: 1010, shown: 1, chosen: 1 },
      },
    },
    matchHistory: [
      {
        sessionId: 'frukty-session-1',
        chosenItemId: 'yabloko',
        loserItemId: 'banan',
      },
    ],
    pendingVoteBatches: [],
    worldStats: {
      lastSyncAt: 0,
      categoryVersions: {},
      categories: {},
    },
  };
}

test('queues a completed session only once', () => {
  const state = createState();
  const session = { sessionId: 'frukty-session-1', categoryId: 'frukty' };

  assert.equal(queueSessionVotes(state, session), true);
  assert.equal(queueSessionVotes(state, session), false);
  assert.equal(state.pendingVoteBatches.length, 1);
  assert.deepEqual(state.pendingVoteBatches[0].votes, [
    { winnerId: 'yabloko', loserId: 'banan' },
  ]);
});

test('world snapshot overrides local ratings and keeps local fallback', () => {
  const state = createState();
  state.worldStats.categories.frukty = {
    items: {
      yabloko: { rating: 1200, shown: 100, chosen: 60 },
      banan: { rating: 980, shown: 100, chosen: 40 },
    },
  };

  const ratings = getEffectiveCategoryRatings(state, 'frukty');
  assert.equal(ratings.yabloko.chosen, 60);
  assert.equal(ratings.banan.chosen, 40);
});

test('downloads a snapshot once and skips another sync within 24 hours', async () => {
  const state = createState();
  let requests = 0;

  globalThis.fetch = async (_url, options) => {
    requests += 1;
    const body = JSON.parse(options.body);
    assert.equal(body.includeSnapshot, true);
    return {
      ok: true,
      json: async () => ({
        acceptedBatchIds: [],
        categoryVersions: { frukty: 2 },
        categories: {
          frukty: {
            version: 2,
            updatedAt: 100,
            items: { yabloko: { shown: 10, chosen: 6 } },
          },
        },
        syncedAt: Date.now(),
      }),
    };
  };

  const first = await syncWorldStats(state);
  const second = await syncWorldStats(state);

  assert.equal(first.snapshotUpdated, true);
  assert.equal(second.attempted, false);
  assert.equal(requests, 1);
  assert.equal(state.worldStats.categoryVersions.frukty, 2);
});

test('sends queued votes without requesting another snapshot', async () => {
  const state = createState();
  state.worldStats.lastSyncAt = Date.now();
  queueSessionVotes(state, { sessionId: 'frukty-session-1', categoryId: 'frukty' });

  globalThis.fetch = async (_url, options) => {
    const body = JSON.parse(options.body);
    assert.equal(body.includeSnapshot, false);
    assert.equal(body.pendingBatches.length, 1);
    return {
      ok: true,
      json: async () => ({
        acceptedBatchIds: ['frukty-session-1'],
        categoryVersions: {},
        categories: {},
        syncedAt: Date.now(),
      }),
    };
  };

  const result = await syncWorldStats(state);
  assert.equal(result.snapshotUpdated, false);
  assert.equal(state.pendingVoteBatches.length, 0);
});

test('keeps local data and pending votes when the server is unavailable', async () => {
  const state = createState();
  queueSessionVotes(state, { sessionId: 'frukty-session-1', categoryId: 'frukty' });
  globalThis.fetch = async () => {
    throw new Error('offline');
  };

  const result = await syncWorldStats(state);
  assert.equal(result.offline, true);
  assert.equal(state.pendingVoteBatches.length, 1);
  assert.equal(getEffectiveCategoryRatings(state, 'frukty').yabloko.chosen, 1);
});
