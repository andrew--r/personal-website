import { groupByPublicationYear } from './group-by-publication-year.js';
import { dateToIsoString } from './date-to-iso-string.js';
import { hostFromUrl } from './host-from-url.js';

export function addNunjucksFilters(eleventyConfig) {
  eleventyConfig.addNunjucksFilter(
    'groupByPublicationYear',
    groupByPublicationYear,
  );
  eleventyConfig.addNunjucksFilter('dateToIsoString', dateToIsoString);
  eleventyConfig.addNunjucksFilter('hostFromUrl', hostFromUrl);
}
