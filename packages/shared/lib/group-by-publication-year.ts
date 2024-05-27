import { CollectionItem } from '../11ty/index.js';

export function groupByPublicationYear(items: CollectionItem[]) {
  const itemsByYear = new Map<number, CollectionItem[]>();

  for (const item of items) {
    const year = item.page.date.getFullYear();
    const sameYearItems = itemsByYear.get(year);

    itemsByYear.set(year, (sameYearItems || []).concat(item));
  }

  const sortedYears = Array.from(itemsByYear.entries()).sort(
    ([yearA], [yearB]) => yearB - yearA,
  );

  sortedYears.forEach(([, pages]) => {
    pages.sort((a, b) => b.page.date.getTime() - a.page.date.getTime());
  });

  return sortedYears;
}
