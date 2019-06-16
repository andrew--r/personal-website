const { hashAssets } = require('./hash-assets');
const { minifyMarkup } = require('./minify-markup');

function addTransforms(eleventyConfig, dirs) {
  eleventyConfig.addTransform(
    'hashAssets',
    hashAssets({ buildPath: dirs.output }),
  );

  eleventyConfig.addTransform('minifyMarkup', minifyMarkup());
}

module.exports = { addTransforms };
