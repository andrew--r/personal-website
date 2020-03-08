const { formatDate } = require('./format-date');
const { formatNumber } = require('./format-number');

function addNunjucksShortcodes(eleventyConfig) {
  eleventyConfig.addNunjucksShortcode('formatDate', formatDate);
  eleventyConfig.addNunjucksShortcode('formatNumber', formatNumber);
}

module.exports = { addNunjucksShortcodes };
