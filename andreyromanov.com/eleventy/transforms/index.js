import { compileCss, minifyMarkup } from 'ar-11ty-transforms';
import { resolve } from 'node:path';

export function addTransforms(eleventyConfig) {
  compileCss(
    eleventyConfig,
    resolve(import.meta.dirname, '../../source/index.css'),
  );

  eleventyConfig.addTransform('minifyMarkup', minifyMarkup());
}
