const postcss = require('postcss');

function compileCss(eleventyConfig, entryPath) {
  eleventyConfig.addTemplateFormats('css');
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (content, path) => {
      if (path !== entryPath) return;

      return () =>
        postcss([
          require('postcss-easy-import')(),
          require('postcss-selector-matches')(),
          require('postcss-nested')(),
          require('autoprefixer')(),
          require('postcss-csso')(),
        ])
          .process(content, { from: path })
          .then((result) => result.css);
    },
  });
}

module.exports = { compileCss };
