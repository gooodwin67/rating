import { resolveAssetPath } from '../utils/asset-path';

export const TUTORIAL_CATEGORY_ID = 'tutorial';

export const tutorialCategory = {
  id: TUTORIAL_CATEGORY_ID,
  title: 'Обучение',
  titleEn: 'Tutorial',
  itemIds: ['tutorial_cat', 'tutorial_dog'],
  image: resolveAssetPath('/images/categories/domashnie_zhivotnye.jpg'),
  items: [
    {
      id: 'tutorial_cat',
      categoryId: TUTORIAL_CATEGORY_ID,
      categoryName: 'Обучение',
      title: 'кошка',
      titleEn: 'cat',
      image: resolveAssetPath('/images/items/domashnie_zhivotnye/koshka.jpg'),
      accent: '#ffb6d9',
    },
    {
      id: 'tutorial_dog',
      categoryId: TUTORIAL_CATEGORY_ID,
      categoryName: 'Обучение',
      title: 'собака',
      titleEn: 'dog',
      image: resolveAssetPath('/images/items/domashnie_zhivotnye/sobaka.jpg'),
      accent: '#ffd27a',
    },
  ],
};

export const tutorialRatings = {
  tutorial_cat: {
    rating: 990,
    wins: 46,
    losses: 54,
    shown: 100,
    chosen: 46,
  },
  tutorial_dog: {
    rating: 1010,
    wins: 54,
    losses: 46,
    shown: 100,
    chosen: 54,
  },
};
