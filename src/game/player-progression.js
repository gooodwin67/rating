export const CHOICE_STAR_REWARD = 1;
export const CHOICE_SESSION_REWARD = 100;

const RANKS = [
  { threshold: 0, ru: 'Любопытный', en: 'Curious' },
  { threshold: 1500, ru: 'Стажёр вкуса', en: 'Taste trainee' },
  { threshold: 4000, ru: 'Народный нюх', en: 'People reader' },
  { threshold: 8000, ru: 'Детектив', en: 'Detective' },
  { threshold: 14000, ru: 'Менталист', en: 'Mentalist' },
  { threshold: 23000, ru: 'Знаток толпы', en: 'Crowd expert' },
  { threshold: 36000, ru: 'Оракул', en: 'Oracle' },
  { threshold: 54000, ru: 'Мастер рейтинга', en: 'Rating master' },
  { threshold: 78000, ru: 'Легенда рейтинга', en: 'Rating legend' },
  { threshold: 110000, ru: 'Что ты такое?', en: 'What are you?' },
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
