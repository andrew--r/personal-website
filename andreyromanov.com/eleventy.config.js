import rss from '@11ty/eleventy-plugin-rss';
import markdownIt from 'markdown-it';
import hljs from 'highlight.js';
import { addNunjucksFilters } from './eleventy/nunjucks-fitlers/index.js';
import { addNunjucksShortcodes } from './eleventy/nunjucks-shortcodes/index.js';
import { addTransforms } from './eleventy/transforms/index.js';
import { dir as _dir } from './build-config.js';

const LAYOUTS = ['base', 'article'];

const dir = {
  input: _dir.source,
  output: _dir.build,
};

export default async (config) => {
  LAYOUTS.forEach((layout) => {
    config.addLayoutAlias(layout, `layouts/${layout}.njk`);
  });

  config.setLibrary(
    'md',
    markdownIt({
      html: true,
      highlight: (source, language) =>
        language ? hljs.highlight(source, { language }).value : '',
    }),
  );

  config.addPlugin(rss);
  config.addPassthroughCopy(`${dir.input}/assets`);

  addNunjucksFilters(config);
  addNunjucksShortcodes(config);
  addTransforms(config, dir);

  return {
    dir,
    templateFormats: ['njk', 'md', 'png'],
    passthroughFileCopy: true,
  };
};
