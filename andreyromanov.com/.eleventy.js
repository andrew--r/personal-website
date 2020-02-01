const rss = require('@11ty/eleventy-plugin-rss');
const { addNunjucksFilters } = require('./eleventy/nunjucks-fitlers');
const { addNunjucksShortcodes } = require('./eleventy/nunjucks-shortcodes');
const { addTransforms } = require('./eleventy/transforms');
const buildConfig = require('./build-config');

const dir = {
  input: buildConfig.dir.eleventySource,
  output: buildConfig.dir.build,
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(rss);
  eleventyConfig.addPassthroughCopy(`${dir.input}/assets`);
  addNunjucksFilters(eleventyConfig);
  addNunjucksShortcodes(eleventyConfig);
  addTransforms(eleventyConfig, dir);

  return {
    dir,
    templateFormats: ['njk', 'md', 'png'],
    passthroughFileCopy: true,
  };
};
