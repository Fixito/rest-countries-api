import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ITEMS_PER_PAGE } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function paginate<T>(items: T[]): T[][] {
  const itemsPerPage = ITEMS_PER_PAGE;
  const pages = Math.ceil(items.length / itemsPerPage);

  return Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });
}
