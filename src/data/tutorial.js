import { resolveAssetPath } from '../utils/asset-path';

export const TUTORIAL_CATEGORY_ID = 'tutorial';

export const tutorialCategory = {
  id: TUTORIAL_CATEGORY_ID,
  title: 'Обучение',
  titleEn: 'Tutorial',
  itemIds: ['tutorial_heads', 'tutorial_tails'],
  image: resolveAssetPath('/images/tutorial/tutorial.svg'),
  items: [
    {
      id: 'tutorial_heads',
      categoryId: TUTORIAL_CATEGORY_ID,
      categoryName: 'Обучение',
      title: 'орёл',
      titleEn: 'heads',
      image: resolveAssetPath('/images/tutorial/heads.svg'),
      accent: '#ffd65a',
    },
    {
      id: 'tutorial_tails',
      categoryId: TUTORIAL_CATEGORY_ID,
      categoryName: 'Обучение',
      title: 'решка',
      titleEn: 'tails',
      image: resolveAssetPath('/images/tutorial/tails.svg'),
      accent: '#ff9f68',
    },
  ],
};

export const tutorialRatings = {
  tutorial_heads: {
    rating: 1010,
    wins: 57,
    losses: 43,
    shown: 100,
    chosen: 57,
  },
  tutorial_tails: {
    rating: 990,
    wins: 43,
    losses: 57,
    shown: 100,
    chosen: 43,
  },
};
