export const METRIKA_COUNTER_ID = 112303091;

export const METRIKA_GOALS = Object.freeze({
  TUTORIAL_COMPLETED: 'tutorial_completed',
  CATEGORY_FILLED: 'category_filled',
  CATEGORY_FILLED_1: 'category_filled_1',
  CATEGORY_GUESSED_1: 'category_guessed_1',
  CATEGORIES_FILLED_2: 'categories_filled_2',
  CATEGORIES_FILLED_5: 'categories_filled_5',
  CATEGORIES_FILLED_10: 'categories_filled_10',
});

export function reachMetrikaGoal(goal, params = {}) {
  if (typeof window.ym !== 'function') return false;
  window.ym(METRIKA_COUNTER_ID, 'reachGoal', goal, params);
  return true;
}
