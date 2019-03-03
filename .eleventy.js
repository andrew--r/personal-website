const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

const outputDirectory = 'build';

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(
    cacheBuster({
      outputDirectory,
    }),
  );

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

  return {
    dir: {
      input: 'source',
      output: outputDirectory,
    },
    templateFormats: ['njk', 'md', 'css', 'jpg'],
    passthroughFileCopy: true,
  };
};
