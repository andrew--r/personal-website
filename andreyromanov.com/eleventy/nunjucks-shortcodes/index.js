import { formatDate } from './format-date.js';
import { formatShortDate } from './format-short-date.js';
import { formatNumber } from './format-number.js';

export function addNunjucksShortcodes(eleventyConfig) {
  eleventyConfig.addNunjucksShortcode('formatDate', formatDate);
  eleventyConfig.addNunjucksShortcode('formatShortDate', formatShortDate);
  eleventyConfig.addNunjucksShortcode('formatNumber', formatNumber);
}
