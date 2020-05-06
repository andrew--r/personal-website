const rss = require('@11ty/eleventy-plugin-rss');
const markdownIt = require('markdown-it');
const hljs = require('highlight.js');
const { addNunjucksFilters } = require('./eleventy/nunjucks-fitlers');
const { addNunjucksShortcodes } = require('./eleventy/nunjucks-shortcodes');
const { addTransforms } = require('./eleventy/transforms');
const buildConfig = require('./build-config');

const LAYOUTS = ['base', 'article'];

const dir = {
  input: buildConfig.dir.eleventySource,
  output: buildConfig.dir.build,
};

module.exports = (config) => {
  LAYOUTS.forEach((layout) => {
    config.addLayoutAlias(layout, `layouts/${layout}.njk`);
  });

  config.setLibrary(
    'md',
    markdownIt({
      html: true,
      highlight: (source, language) =>
        language ? hljs.highlight(language, source).value : '',
    }),
  );

  config.addPlugin(rss);
  config.addPassthroughCopy(`${dir.input}/assets`);

  addNunjucksFilters(config);
  addNunjucksShortcodes(config);
  addTransforms(config, dir);

  return {
    dir,
    templateFormats: ['njk', 'md', 'png', 'jpg', 'svg'],
    passthroughFileCopy: true,
  };
};
