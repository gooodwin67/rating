import { addPlayerStars, getPlayerRank } from './player-progression';
import { getEffectiveCategoryRatings } from './world-stats-service';
import { getExpectedWinChance, getItemEloRating } from './rating-service';

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
  const items = Array.isArray(category.items) ? category.items : [];
  return items;
}

export function createGuessSession(category, state) {
  const availableItems = getItemsWithGuessData(category, state);
  const categoryRatings = getEffectiveCategoryRatings(state, category.id);
  const unpairedItems = shuffle(availableItems).sort((leftItem, rightItem) => (
    getPopularity(leftItem, categoryRatings) - getPopularity(rightItem, categoryRatings)
  ));
  const pairs = [];

  // Pair opposite ends of the Elo ranking so every round has a clear favourite.
  while (unpairedItems.length > 1) {
    const leftItem = unpairedItems.shift();
    const rightItem = unpairedItems.pop();
    if (!rightItem) break;
    pairs.push(Math.random() < 0.5 ? [leftItem, rightItem] : [rightItem, leftItem]);
  }

  return {
    sessionId: createSessionId(category.id),
    categoryId: category.id,
    pairs,
    totalRounds: pairs.length,
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
  return getItemEloRating(item.id, categoryRatings[item.id]);
}

export function getGuessHint(state, categoryId, leftItem, rightItem) {
  const categoryRatings = getEffectiveCategoryRatings(state, categoryId);
  const leftPopularity = getPopularity(leftItem, categoryRatings);
  const rightPopularity = getPopularity(rightItem, categoryRatings);

  return {
    itemId: leftPopularity > rightPopularity ? leftItem.id : rightItem.id,
    isTie: false,
  };
}

export function getGuessRoundResult(
  state,
  categoryId,
  leftItem,
  rightItem,
  chosenItemId,
  currentStreak = 0,
) {
  const categoryRatings = getEffectiveCategoryRatings(state, categoryId);
  const leftPopularity = getPopularity(leftItem, categoryRatings);
  const rightPopularity = getPopularity(rightItem, categoryRatings);
  const leftPercent = Math.round(getExpectedWinChance(leftPopularity, rightPopularity) * 1000) / 10;
  const rightPercent = 100 - leftPercent;
  const chosenPercent = chosenItemId === leftItem.id ? leftPercent : rightPercent;
  const isCorrect = chosenPercent > 50;
  const difference = Math.abs(leftPercent - rightPercent);
  const basePoints = isCorrect ? Math.round(chosenPercent) : 0;
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
