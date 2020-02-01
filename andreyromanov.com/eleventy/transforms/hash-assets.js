const posthtml = require('posthtml');
const { hashAssets: posthtmlHashAssets } = require('./posthtml/hash-assets');

function hashAssets({ buildPath } = {}) {
  if (!buildPath) {
    throw new Error('[hashAssets] Build path is not specified');
  }

  return (content, outputPath) => {
    if (!outputPath || !outputPath.endsWith('.html')) {
      return content;
    }

    return posthtml()
      .use(posthtmlHashAssets({ buildPath }))
      .process(content, { sync: true }).html;
  };
}

module.exports = { hashAssets };
