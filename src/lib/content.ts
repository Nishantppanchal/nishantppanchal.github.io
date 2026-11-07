import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';

type DraftableKey = Exclude<CollectionKey, 'awards'>;

/** All entries in a collection, minus drafts. */
export async function getPublished<C extends DraftableKey>(
  collection: C,
): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(collection);
  return entries.filter((entry) => !(entry.data as { draft: boolean }).draft);
}

/** True when the entry's Markdown body has any content worth rendering. */
export const hasBody = (entry: { body?: string }): boolean => Boolean(entry.body?.trim());

export interface YearGroup<T> {
  year: number;
  items: T[];
}

/** Groups items by year, newest year first, keeping the given order within a year. */
export function groupByYear<T>(items: T[], getYear: (item: T) => number): YearGroup<T>[] {
  const groups = new Map<number, T[]>();
  for (const item of items) {
    const year = getYear(item);
    const group = groups.get(year);
    if (group) group.push(item);
    else groups.set(year, [item]);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, groupItems]) => ({ year, items: groupItems }));
}

/** Sort key for "YYYY" or "YYYY-MM" values, with "now" after everything. */
export function dateKey(value: string): number {
  if (value === 'now') return Number.POSITIVE_INFINITY;
  const [year, month = '0'] = value.split('-');
  return Number(year) * 100 + Number(month);
}

/** "2024 — 2025", "2026 — now", or "2023" when both ends fall in the same year. */
export function formatRange(start: string, end: string): string {
  const startYear = start.slice(0, 4);
  const endYear = end === 'now' ? 'now' : end.slice(0, 4);
  return startYear === endYear ? startYear : `${startYear} — ${endYear}`;
}

/** Caps the entrance stagger so long pages don't wait for content below the fold. */
export const staggerIndex = (index: number): number => Math.min(index, 12);
