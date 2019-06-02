module.exports = {
  plugins: [
    require('postcss-easy-import')(),
    require('postcss-selector-matches')(),
    require('postcss-csso')(),
  ],
};
