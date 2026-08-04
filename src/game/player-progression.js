export const CHOICE_STAR_REWARD = 1;
export const CHOICE_SESSION_BONUS = 10;

const RANKS = [
  { threshold: 0, ru: 'Любопытный', en: 'Curious' },
  { threshold: 150, ru: 'Стажёр вкуса', en: 'Taste trainee' },
  { threshold: 400, ru: 'Народный нюх', en: 'People reader' },
  { threshold: 800, ru: 'Детектив', en: 'Detective' },
  { threshold: 1400, ru: 'Профайлер', en: 'Profiler' },
  { threshold: 2300, ru: 'Менталист', en: 'Mentalist' },
  { threshold: 3600, ru: 'Знаток толпы', en: 'Crowd expert' },
  { threshold: 5400, ru: 'Оракул', en: 'Oracle' },
  { threshold: 7800, ru: 'Мастер рейтинга', en: 'Rating master' },
  { threshold: 11000, ru: 'Легенда рейтинга', en: 'Rating legend' },
];

export function getPlayerStars(player = {}) {
  const value = player.stars ?? player.guessScore ?? 0;
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export function addPlayerStars(state, amount) {
  const safeAmount = Number.isFinite(amount) ? Math.max(0, Math.round(amount)) : 0;
  state.player.stars = getPlayerStars(state.player) + safeAmount;
  return safeAmount;
}

export function getPlayerRank(stars = 0, locale = 'ru') {
  const safeStars = Number.isFinite(stars) ? Math.max(0, stars) : 0;
  let index = 0;

  RANKS.forEach((rank, rankIndex) => {
    if (safeStars >= rank.threshold) index = rankIndex;
  });

  const rank = RANKS[index];
  const nextRank = RANKS[index + 1] ?? null;
  const span = nextRank ? nextRank.threshold - rank.threshold : 0;
  const progress = nextRank
    ? Math.min(100, ((safeStars - rank.threshold) / span) * 100)
    : 100;

  return {
    level: index + 1,
    title: rank[locale] ?? rank.ru,
    currentThreshold: rank.threshold,
    nextThreshold: nextRank?.threshold ?? null,
    starsToNext: nextRank ? Math.max(0, nextRank.threshold - safeStars) : 0,
    progress,
  };
}

export function getUnlockedCategoriesCount(categoryProgress = {}) {
  return Object.values(categoryProgress).filter((progress) => progress?.guessModeUnlocked).length;
}

export function getPlayerAccuracy(player = {}) {
  const total = player.totalGuesses ?? 0;
  if (!total) return 0;
  return Math.round(((player.correctGuesses ?? 0) / total) * 100);
}
