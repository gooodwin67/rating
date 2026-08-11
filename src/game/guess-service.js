import { addPlayerStars, getPlayerRank } from './player-progression';

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
  const locale = localStorage.getItem('locale') || 'ru';
  const rank = getPlayerRank(score, locale);
  return { ...rank, title: `${rank.title} (${rank.level})` };
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
    earnedStars: 0,
    correctAnswers: 0,
    currentStreak: 0,
    bestStreak: 0,
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

export function getGuessRoundResult(
  state,
  categoryId,
  leftItem,
  rightItem,
  chosenItemId,
  currentStreak = 0,
) {
  const categoryRatings = state.itemRatings?.[categoryId] ?? {};
  const leftPopularity = getPopularity(leftItem, categoryRatings);
  const rightPopularity = getPopularity(rightItem, categoryRatings);
  const popularityTotal = leftPopularity + rightPopularity;
  const leftPercent = popularityTotal > 0
    ? Math.round((leftPopularity / popularityTotal) * 100)
    : 50;
  const rightPercent = 100 - leftPercent;
  const chosenPercent = chosenItemId === leftItem.id ? leftPercent : rightPercent;
  const isCorrect = chosenPercent > 50;
  const difference = Math.abs(leftPercent - rightPercent);
  const basePoints = isCorrect ? chosenPercent : 0;
  const multiplier = isCorrect ? Math.max(1, currentStreak + 1) : 1;
  const points = basePoints * multiplier;

  return {
    leftPercent,
    rightPercent,
    difference,
    isCorrect,
    basePoints,
    multiplier,
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
    currentStreak = 0,
  } = payload;
  const result = getGuessRoundResult(
    state,
    categoryId,
    leftItem,
    rightItem,
    chosenItemId,
    currentStreak,
  );
  const now = Date.now();

  addPlayerStars(state, result.points);
  state.player.totalGuesses = (state.player.totalGuesses ?? 0) + 1;
  if (result.isCorrect) {
    state.player.correctGuesses = (state.player.correctGuesses ?? 0) + 1;
  }
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
    basePoints: result.basePoints,
    multiplier: result.multiplier,
    points: result.points,
    roundIndex,
    sessionId,
    playedAt: now,
  });

  return result;
}
