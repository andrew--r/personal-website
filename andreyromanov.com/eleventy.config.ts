import rss from '@11ty/eleventy-plugin-rss';
import markdownIt from 'markdown-it';
import hljs from 'highlight.js';
import { renderToString } from 'preact-render-to-string';
import { addTransforms } from './eleventy/transforms/index.js';
import { dir as _dir } from './build-config.js';
import { isValidElement } from 'preact';

const LAYOUTS = ['base', 'article'];

const dir = {
  input: _dir.source,
  output: _dir.build,
};

export default async (config) => {
  LAYOUTS.forEach((layout) => {
    config.addLayoutAlias(layout, `layouts/${layout}.11ty.tsx`);
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

  config.addExtension(['11ty.jsx', '11ty.ts', '11ty.tsx'], {
    key: '11ty.js',
  });
  config.addTransform('tsx', async (content: any) => {
    if (isValidElement(content)) {
      const result = await renderToString(content);
      return `<!doctype html>\n${result}`;
    }

    return content;
  });

  addTransforms(config, dir);

  return {
    dir,
    templateFormats: ['11ty.tsx', 'njk', 'md', 'png', 'jpg', 'svg'],
    passthroughFileCopy: true,
  };
};
