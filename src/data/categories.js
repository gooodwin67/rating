import { items } from './items';

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

    if (!categoriesById.has(item.categoryId)) {
      categoriesById.set(item.categoryId, {
        id: item.categoryId,
        title: item.categoryName ?? formatCategoryTitle(item.categoryId),
        itemIds: [],
        items: [],
        image: item.categoryImage ?? `/images/categories/${item.categoryId}.png`,
      });
    }

    const category = categoriesById.get(item.categoryId);
    category.itemIds.push(item.id);
    category.items.push(item);
  });

  return [...categoriesById.values()];
}

export const categories = createCategoriesFromItems(items);
