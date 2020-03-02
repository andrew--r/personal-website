const hasha = require('hasha');

const revisionsByPath = new Map();

/**
 * @param {string} path - path to file
 * @return {string} file revision
 */
function getFileRevision(path) {
  const existingRevision = revisionsByPath.get(path);

  if (existingRevision) {
    return existingRevision;
  }

  const revision = hasha
    .fromFileSync(path, {
      algorithm: 'md5',
    })
    .slice(0, 10);

  revisionsByPath.set(path, revision);
  return revision;
}

module.exports = { getFileRevision };
