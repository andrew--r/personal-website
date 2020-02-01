const visit = require('unist-util-visit');

module.exports = function transformImageUrls(options) {
  if (!options || !options.transform) {
    throw Error('Missing required "transform" option');
  }

  function visitor(node) {
    if (!node.url.startsWith('http') && !node.url.startsWith('data:')) {
      node.url = options.transform(node.url);
    }
  }

  function transform(tree) {
    visit(tree, ['image'], visitor);
  }

  return transform;
};
