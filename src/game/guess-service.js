const RATING_THRESHOLDS = [0, 150, 400, 800, 1400, 2300, 3600, 5400, 7800, 11000];

const RATING_TITLES = [
  'Ребенок',
  'Любопытный',
  'Стажер вкуса',
  'Народный нюх',
  'Детектив',
  'Профайлер',
  'Менталист',
  'Терминатор',
  'Оракул',
  'Легенда рейтинга',
];

function shuffle(array) {
  const next = [...array];

  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }

  return next;
}

function createSessionId(categoryId) {
  return `guess-${categoryId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function getGuessRating(score = 0) {
  const safeScore = Number.isFinite(score) ? score : 0;
  let level = 1;

  for (let i = 0; i < RATING_THRESHOLDS.length; i += 1) {
    if (safeScore >= RATING_THRESHOLDS[i]) {
      level = i + 1;
    }
  }

  const cappedLevel = Math.min(level, 10);

  return {
    level: cappedLevel,
    title: `${RATING_TITLES[cappedLevel - 1]} (${cappedLevel})`,
    currentThreshold: RATING_THRESHOLDS[cappedLevel - 1],
    nextThreshold: RATING_THRESHOLDS[cappedLevel] ?? null,
  };
}

export function getItemsWithGuessData(category, state) {
  const categoryRatings = state.itemRatings?.[category.id] ?? {};
  const items = Array.isArray(category.items) ? category.items : [];

  return items.filter((item) => {
    const stats = categoryRatings[item.id];
    return stats && stats.shown > 0;
  });
}

export function createGuessSession(category, state) {
  const availableItems = getItemsWithGuessData(category, state);
  const shuffledItems = shuffle(availableItems);
  const totalRounds = Math.floor(shuffledItems.length / 2);
  const pairs = [];

  for (let i = 0; i < totalRounds * 2; i += 2) {
    pairs.push([shuffledItems[i], shuffledItems[i + 1]]);
  }

  return {
    sessionId: createSessionId(category.id),
    categoryId: category.id,
    pairs,
    totalRounds,
    currentRoundIndex: 0,
    status: 'playing',
  };
}

export function getGuessAvailability(category, state) {
  const progress = state.categoryProgress?.[category.id] ?? {
    completedRounds: 0,
    guessModeUnlocked: false,
  };
  const availableItems = getItemsWithGuessData(category, state);

  if (!progress.guessModeUnlocked) {
    return {
      canPlay: false,
      reason: 'locked',
      completedRounds: progress.completedRounds ?? 0,
      availableItemsCount: availableItems.length,
    };
  }

  if (availableItems.length < 2) {
    return {
      canPlay: false,
      reason: 'not_enough_data',
      completedRounds: progress.completedRounds ?? 0,
      availableItemsCount: availableItems.length,
    };
  }

  return {
    canPlay: true,
    reason: 'ready',
    completedRounds: progress.completedRounds ?? 0,
    availableItemsCount: availableItems.length,
  };
}

function getPopularity(item, categoryRatings) {
  const stats = categoryRatings[item.id];

  if (!stats || !stats.shown) return 0;

  return stats.chosen / stats.shown;
}

export function getGuessRoundResult(state, categoryId, leftItem, rightItem, chosenItemId) {
  const categoryRatings = state.itemRatings?.[categoryId] ?? {};
  const leftPopularity = getPopularity(leftItem, categoryRatings);
  const rightPopularity = getPopularity(rightItem, categoryRatings);
  const popularityTotal = leftPopularity + rightPopularity;
  const leftPercent = popularityTotal > 0
    ? Math.round((leftPopularity / popularityTotal) * 100)
    : 50;
  const rightPercent = 100 - leftPercent;
  const difference = Math.abs(leftPercent - rightPercent);
  const highestPercent = Math.max(leftPercent, rightPercent);
  const chosenPercent = chosenItemId === leftItem.id ? leftPercent : rightPercent;
  const isCorrect = chosenPercent === highestPercent;
  const points = isCorrect ? Math.max(5, Math.round(100 - difference * 1.8)) : 0;

  return {
    leftPercent,
    rightPercent,
    difference,
    isCorrect,
    points,
  };
}

export function applyGuessResult(state, payload) {
  const {
    categoryId,
    leftItem,
    rightItem,
    chosenItemId,
    roundIndex,
    sessionId,
  } = payload;
  const result = getGuessRoundResult(state, categoryId, leftItem, rightItem, chosenItemId);
  const now = Date.now();

  state.player.guessScore = (state.player.guessScore ?? 0) + result.points;
  state.guessHistory = Array.isArray(state.guessHistory) ? state.guessHistory : [];
  state.guessHistory.push({
    id: `${sessionId}-${roundIndex + 1}-${chosenItemId}`,
    categoryId,
    leftItemId: leftItem.id,
    rightItemId: rightItem.id,
    chosenItemId,
    leftPercent: result.leftPercent,
    rightPercent: result.rightPercent,
    isCorrect: result.isCorrect,
    points: result.points,
    roundIndex,
    sessionId,
    playedAt: now,
  });

  return result;
}
