const { formattedDate } = require('./formatted-date');

function addNunjucksShortcodes(eleventyConfig) {
  eleventyConfig.addNunjucksShortcode('formattedDate', formattedDate);
}

module.exports = { addNunjucksShortcodes };
