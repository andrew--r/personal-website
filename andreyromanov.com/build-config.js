const path = require('node:path');

const dir = {
  source: path.resolve(__dirname, './source'),
  build: path.resolve(__dirname, './build'),
};

module.exports = { dir };
