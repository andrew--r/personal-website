const { compileCss, minifyMarkup } = require('ar-11ty-transforms');
const path = require('node:path');

function addTransforms(eleventyConfig, dirs) {
  compileCss(eleventyConfig, path.resolve(__dirname, '../../source/index.css'));

  eleventyConfig.addTransform('minifyMarkup', minifyMarkup());
}

module.exports = { addTransforms };
