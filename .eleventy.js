const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');
const { addNunjucksFilters } = require('./eleventy/nunjucks-fitlers');
const { addNunjucksShortcodes } = require('./eleventy/nunjucks-shortcodes');

const outputDirectory = 'build';

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(
    cacheBuster({
      outputDirectory,
    }),
  );
  eleventyConfig.addPassthroughCopy('source/assets');
  addNunjucksFilters(eleventyConfig);
  addNunjucksShortcodes(eleventyConfig);

  return {
    dir: {
      input: 'source',
      output: outputDirectory,
    },
    templateFormats: ['njk', 'md', 'css', 'png'],
    passthroughFileCopy: true,
  };
};
