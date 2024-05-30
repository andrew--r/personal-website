import { resolve } from 'node:path';

export const dir = {
  source: resolve(import.meta.dirname, './source'),
  build: resolve(import.meta.dirname, './build'),
};
