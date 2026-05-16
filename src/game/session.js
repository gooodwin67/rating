function shuffle(array) {
  const next = [...array];

  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }

  return next;
}

function createSessionId(categoryId) {
  return `${categoryId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function createCategorySession(category) {
  const categoryItems = Array.isArray(category.items) ? category.items : [];

  const shuffledItems = shuffle(categoryItems);
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
