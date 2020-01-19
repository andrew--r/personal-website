const { groupByPublicationYear } = require('./group-by-publication-year');
const { dateToIsoString } = require('./date-to-iso-string');
const { hostFromUrl } = require('./host-from-url');

function addNunjucksFilters(eleventyConfig) {
  eleventyConfig.addNunjucksFilter(
    'groupByPublicationYear',
    groupByPublicationYear,
  );
  eleventyConfig.addNunjucksFilter('dateToIsoString', dateToIsoString);
  eleventyConfig.addNunjucksFilter('hostFromUrl', hostFromUrl);
}

module.exports = { addNunjucksFilters };
