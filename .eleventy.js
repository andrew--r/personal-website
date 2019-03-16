const rss = require('@11ty/eleventy-plugin-rss');
const { addNunjucksFilters } = require('./eleventy/nunjucks-fitlers');
const { addNunjucksShortcodes } = require('./eleventy/nunjucks-shortcodes');
const { addTransforms } = require('./eleventy/transforms');

const dir = {
  input: 'source',
  output: 'build',
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(rss);
  eleventyConfig.addPassthroughCopy('source/assets');
  addNunjucksFilters(eleventyConfig);
  addNunjucksShortcodes(eleventyConfig);
  addTransforms(eleventyConfig, dir);

  return {
    dir,
    templateFormats: ['njk', 'md', 'css', 'png'],
    passthroughFileCopy: true,
  };
};
