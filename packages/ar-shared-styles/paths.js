const path = require('path');

module.exports.arSharedStylesPaths = {
  packageDir: path.parse(require.resolve('ar-shared-styles')).dir,
};
