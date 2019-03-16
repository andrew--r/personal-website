const { hashAssets } = require('./hash-assets');

function addTransforms(eleventyConfig, dirs) {
  eleventyConfig.addTransform(
    'hashAssets',
    hashAssets({ buildPath: dirs.output }),
  );
}

module.exports = { addTransforms };
