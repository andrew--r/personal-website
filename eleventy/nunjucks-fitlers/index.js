const { groupByPublicationYear } = require('./group-by-publication-year');
const { dateToIsoString } = require('./date-to-iso-string');

function addNunjucksFilters(eleventyConfig) {
  eleventyConfig.addNunjucksFilter(
    'groupByPublicationYear',
    groupByPublicationYear,
  );

  eleventyConfig.addNunjucksFilter('dateToIsoString', dateToIsoString);
}

module.exports = { addNunjucksFilters };
