export const RATING_MODEL_VERSION = 2;
export const DEFAULT_ELO_RATING = 1500;
const ELO_K_FACTOR = 32;

function hashString(value = '') {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function getInitialEloRating(itemId = '') {
  // Stable starter ratings make the first rounds meaningful before real votes arrive.
  return DEFAULT_ELO_RATING + ((hashString(itemId) / 0xffffffff) - 0.5) * 300;
}

export function getItemEloRating(itemId, rating = {}) {
  return Number.isFinite(rating?.rating) ? rating.rating : getInitialEloRating(itemId);
}

export function getExpectedWinChance(rating, opponentRating) {
  return 1 / (1 + 10 ** ((opponentRating - rating) / 400));
}

export function ensureItemRating(existingRating = {}, itemId = '') {
  return {
    rating: getItemEloRating(itemId, existingRating),
    wins: existingRating.wins ?? 0,
    losses: existingRating.losses ?? 0,
    shown: existingRating.shown ?? 0,
    chosen: existingRating.chosen ?? 0,
    updatedAt: existingRating.updatedAt ?? Date.now(),
  };
}

export function applyChoiceResult(state, payload) {
  const {
    playerId,
    categoryId,
    leftItem,
    rightItem,
    chosenItemId,
    roundIndex,
    sessionId,
  } = payload;

  const loserItemId = chosenItemId === leftItem.id ? rightItem.id : leftItem.id;
  const categoryRatings = state.itemRatings[categoryId] ?? {};
  const chosenRating = ensureItemRating(categoryRatings[chosenItemId], chosenItemId);
  const loserRating = ensureItemRating(categoryRatings[loserItemId], loserItemId);
  const now = Date.now();

  const chosenExpected = getExpectedWinChance(chosenRating.rating, loserRating.rating);
  const loserExpected = 1 - chosenExpected;

  chosenRating.rating += ELO_K_FACTOR * (1 - chosenExpected);
  chosenRating.wins += 1;
  chosenRating.shown += 1;
  chosenRating.chosen += 1;
  chosenRating.updatedAt = now;

  loserRating.rating += ELO_K_FACTOR * (0 - loserExpected);
  loserRating.losses += 1;
  loserRating.shown += 1;
  loserRating.updatedAt = now;

  state.itemRatings[categoryId] = {
    ...categoryRatings,
    [chosenItemId]: chosenRating,
    [loserItemId]: loserRating,
  };

  const progress = state.categoryProgress[categoryId] ?? {
    completedRounds: 0,
    guessModeUnlocked: false,
    lastPlayedAt: now,
  };
  const wasUnlocked = progress.guessModeUnlocked;

  progress.completedRounds += 1;
  progress.guessModeUnlocked = progress.completedRounds >= 10;
  progress.lastPlayedAt = now;
  state.categoryProgress[categoryId] = progress;

  state.matchHistory.push({
    id: `${sessionId}-${roundIndex + 1}-${chosenItemId}`,
    playerId,
    categoryId,
    leftItemId: leftItem.id,
    rightItemId: rightItem.id,
    chosenItemId,
    loserItemId,
    roundIndex,
    sessionId,
    playedAt: now,
  });

  const starsEarned = addPlayerStars(state, CHOICE_STAR_REWARD);

  return {
    chosenItemId,
    loserItemId,
    progress,
    starsEarned,
    unlockedNow: !wasUnlocked && progress.guessModeUnlocked,
  };
}
import { addPlayerStars, CHOICE_STAR_REWARD } from './player-progression';
