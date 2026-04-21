const DEFAULT_RATING = 1000;
const RATING_STEP = 10;

export function ensureItemRating(existingRating = {}) {
  return {
    rating: existingRating.rating ?? DEFAULT_RATING,
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
  const chosenRating = ensureItemRating(categoryRatings[chosenItemId]);
  const loserRating = ensureItemRating(categoryRatings[loserItemId]);
  const now = Date.now();

  chosenRating.rating += RATING_STEP;
  chosenRating.wins += 1;
  chosenRating.shown += 1;
  chosenRating.chosen += 1;
  chosenRating.updatedAt = now;

  loserRating.rating -= RATING_STEP;
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

  return {
    chosenItemId,
    loserItemId,
    progress,
  };
}
