const path = require('path');
const hasha = require('hasha');

const revisionsByUrl = new Map();

function getRevision(url, base) {
  const existingRevision = revisionsByUrl.get(url);

  if (existingRevision) {
    return existingRevision;
  }

  const revision = hasha
    .fromFileSync(path.join(base, url), {
      algorithm: 'md5',
    })
    .slice(0, 10);

  revisionsByUrl.set(url, revision);
  return revision;
}

function hashAssets({ buildPath }) {
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
        node.attrs.href = `${node.attrs.href}?v=${getRevision(
          node.attrs.href,
          buildPath,
        )}`;
      }

      return node;
    });
  };
}

module.exports = { hashAssets };
