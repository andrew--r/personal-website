const posthtml = require('posthtml');
const {
  hashAssets: posthtmlHashAssets,
} = require('ar-posthtml-utils/hash-assets');

/**
 * @param {object} options
 * @param {string} options.staticPath
 */
function hashAssets({ staticPath }) {
  if (!staticPath) {
    throw new Error('[hashAssets] Static path is not specified');
  }

  return (content, outputPath) => {
    if (!outputPath || !outputPath.endsWith('.html')) {
      return content;
    }

    return posthtml()
      .use(posthtmlHashAssets({ staticPath }))
      .process(content, { sync: true }).html;
  };
}

module.exports = { hashAssets };
