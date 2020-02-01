const remark = require('remark');
const remarkHtml = require('remark-html');
const remarkHighlight = require('remark-highlight.js');
const remarkTransformImageUrls = require('./remark/transform-image-urls');
const macro = require('remark-macro')();

require('./remark/macro')(macro);

module.exports = function renderMarkdown(markdown, { getPageAssetUrl }) {
  return remark()
    .use(macro.transformer)
    .use(remarkTransformImageUrls, {
      transform: getPageAssetUrl,
    })
    .use(remarkHighlight)
    .use(remarkHtml)
    .processSync(markdown);
};
