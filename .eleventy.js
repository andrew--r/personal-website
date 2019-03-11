const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

const outputDirectory = 'build';

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(
    cacheBuster({
      outputDirectory,
    }),
  );

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addPassthroughCopy('source/assets');

  return {
    dir: {
      input: 'source',
      output: outputDirectory,
    },
    templateFormats: ['njk', 'md', 'css', 'png'],
    passthroughFileCopy: true,
  };
};
