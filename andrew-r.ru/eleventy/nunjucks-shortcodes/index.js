const { formatDate } = require('./format-date');
const { formatShortDate } = require('./format-short-date');
const { formatNumber } = require('./format-number');

function addNunjucksShortcodes(eleventyConfig) {
  eleventyConfig.addNunjucksShortcode('formatDate', formatDate);
  eleventyConfig.addNunjucksShortcode('formatShortDate', formatShortDate);
  eleventyConfig.addNunjucksShortcode('formatNumber', formatNumber);
}

module.exports = { addNunjucksShortcodes };
