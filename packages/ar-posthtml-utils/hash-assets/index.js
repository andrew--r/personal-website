const path = require('path');
const { getFileRevision } = require('./get-file-revision');

/**
 * @param {object} options
 * @param {string} options.staticPath
 */
function hashAssets({ staticPath }) {
  return (tree) => {
    tree.walk((node) => {
      if (!node.tag || !node.attrs) {
        return node;
      }

      if (
        node.tag === 'link' &&
        ['stylesheet', 'icon'].includes(node.attrs.rel) &&
        node.attrs.href.startsWith('/')
      ) {
        node.attrs.href = `${node.attrs.href}?v=${getFileRevision(
          path.join(staticPath, node.attrs.href),
        )}`;
      }

      return node;
    });
  };
}

module.exports.hashAssets = hashAssets;
