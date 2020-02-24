const { hashAssets, minifyMarkup } = require('ar-11ty-transforms');

function addTransforms(eleventyConfig, dirs) {
  eleventyConfig.addTransform(
    'hashAssets',
    hashAssets({ staticPath: dirs.output }),
  );

  eleventyConfig.addTransform('minifyMarkup', minifyMarkup());
}

module.exports = { addTransforms };
