import { items } from './items';
import { resolveAssetPath } from '../utils/asset-path';

// Catalogue priority for the core audience (12–16 years old). Unknown future
// categories are kept after this list instead of disappearing from the UI.
const CATEGORY_ORDER = [
  'videoigry',
  'fastfud',
  'frukty',
  'domashnie_zhivotnye',
  'multfilmy',
  'supergeroi',
  'avtomobilnye_brendy',
  'sladosti_i_deserty',
  'anime',
  'filmy',
  'serialy',
  'muzykalnye_zhanry',
  'gadjety',
  'hobbi',
  'vidy_sporta',
  'nastolnye_igry',
  'populyarnye_blyuda',
  'porody_sobak',
  'kosmos',
  'prazdniki',
  'napitki_bezalkogolnye',
  'muzykalnye_instrumenty',
  'dikie_zhivotnye',
  'morskie_zhivotnye',
  'professii',
  'transport',
  'dostoprimechatelnosti',
  'ptitsy',
  'cveta',
  'cvety',
  'derevya',
  'ovoshchi',
  'kuhonnaya_tehnika',
];

const CATEGORY_ORDER_INDEX = new Map(
  CATEGORY_ORDER.map((categoryId, index) => [categoryId, index]),
);

function formatCategoryTitle(categoryId) {
  return categoryId
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ');
}

export function createCategoriesFromItems(sourceItems) {
  const categoriesById = new Map();

  sourceItems.forEach((item) => {
    if (!item.categoryId) return;

    const normalizedItem = {
      ...item,
      image: resolveAssetPath(item.image),
    };

    if (!categoriesById.has(item.categoryId)) {
      categoriesById.set(item.categoryId, {
        id: item.categoryId,
        title: item.categoryName ?? formatCategoryTitle(item.categoryId),
        itemIds: [],
        items: [],
        image: normalizedItem.image,
      });
    }

    const category = categoriesById.get(item.categoryId);
    category.itemIds.push(item.id);
    category.items.push(normalizedItem);
  });

  return [...categoriesById.values()].sort((left, right) => {
    const leftIndex = CATEGORY_ORDER_INDEX.get(left.id) ?? Number.MAX_SAFE_INTEGER;
    const rightIndex = CATEGORY_ORDER_INDEX.get(right.id) ?? Number.MAX_SAFE_INTEGER;
    return leftIndex - rightIndex;
  });
}

export const categories = createCategoriesFromItems(items);
