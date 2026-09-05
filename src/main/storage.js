const STORAGE_KEY = 'ratingGameState';
const RATING_MODEL_VERSION = 2;

function createDefaultState() {
  const now = Date.now();

  return {
    version: 1,
    ratingModelVersion: RATING_MODEL_VERSION,
    player: {
      id: `local-player-${Math.random().toString(36).slice(2, 10)}`,
      stars: 0,
      guessScore: 0,
      bestStreak: 0,
      correctGuesses: 0,
      totalGuesses: 0,
      sessionsCompleted: 0,
      createdAt: now,
      updatedAt: now,
    },
    categoryProgress: {},
    categoryStatisticsPurchases: {},
    itemRatings: {},
    matchHistory: [],
    guessHistory: [],
    pendingVoteBatches: [],
    worldStats: {
      lastSyncAt: 0,
      categoryVersions: {},
      categories: {},
    },
    tutorial: {
      completed: false,
      choiceCompleted: false,
      chosenItemId: null,
      completedAt: null,
    },
    analytics: {
      completedGuessCategoryIds: [],
    },
  };
}

function normalizeState(rawState) {
  const fallback = createDefaultState();
  const state = rawState && typeof rawState === 'object' ? rawState : fallback;

  const player = {
    ...fallback.player,
    ...(state.player ?? {}),
  };
  player.stars = state.player?.stars ?? state.player?.guessScore ?? 0;
  const guessHistory = Array.isArray(state.guessHistory) ? state.guessHistory : [];
  player.totalGuesses = state.player?.totalGuesses ?? guessHistory.length;
  player.correctGuesses = state.player?.correctGuesses
    ?? guessHistory.filter((entry) => entry?.isCorrect).length;
  const hasExistingProgress = (
    (player.stars ?? 0) > 0
    || (player.sessionsCompleted ?? 0) > 0
    || Object.keys(state.categoryProgress ?? {}).length > 0
    || (Array.isArray(state.matchHistory) && state.matchHistory.length > 0)
    || guessHistory.length > 0
  );
  const tutorial = state.tutorial && typeof state.tutorial === 'object'
    ? { ...fallback.tutorial, ...state.tutorial }
    : { ...fallback.tutorial, completed: hasExistingProgress };
  if (!tutorial.completed && ['tutorial_heads', 'tutorial_tails'].includes(tutorial.chosenItemId)) {
    tutorial.choiceCompleted = false;
    tutorial.chosenItemId = null;
  }

  const usesCurrentRatingModel = state.ratingModelVersion === RATING_MODEL_VERSION;

  return {
    version: state.version ?? 1,
    ratingModelVersion: RATING_MODEL_VERSION,
    player,
    categoryProgress: state.categoryProgress ?? {},
    categoryStatisticsPurchases: state.categoryStatisticsPurchases ?? {},
    itemRatings: usesCurrentRatingModel ? (state.itemRatings ?? {}) : {},
    matchHistory: usesCurrentRatingModel && Array.isArray(state.matchHistory) ? state.matchHistory : [],
    guessHistory,
    pendingVoteBatches: usesCurrentRatingModel && Array.isArray(state.pendingVoteBatches) ? state.pendingVoteBatches : [],
    worldStats: {
      ...fallback.worldStats,
      ...(usesCurrentRatingModel ? (state.worldStats ?? {}) : {}),
      categoryVersions: usesCurrentRatingModel ? (state.worldStats?.categoryVersions ?? {}) : {},
      categories: usesCurrentRatingModel ? (state.worldStats?.categories ?? {}) : {},
    },
    tutorial,
    analytics: {
      ...fallback.analytics,
      ...(state.analytics ?? {}),
      completedGuessCategoryIds: Array.isArray(state.analytics?.completedGuessCategoryIds)
        ? state.analytics.completedGuessCategoryIds
        : [],
    },
  };
}

export function loadGameState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      const fallback = createDefaultState();
      saveGameState(fallback);
      return fallback;
    }

    return normalizeState(JSON.parse(raw));
  } catch (error) {
    console.warn('Failed to load local game state', error);
    const fallback = createDefaultState();
    saveGameState(fallback);
    return fallback;
  }
}

export function saveGameState(state) {
  const nextState = normalizeState(state);
  nextState.player.updatedAt = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  return nextState;
}

export function resetGameState() {
  const fallback = createDefaultState();
  saveGameState(fallback);
  return fallback;
}
