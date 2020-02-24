module.exports = {
  plugins: [
    require('postcss-easy-import')(),
    require('postcss-selector-matches')(),
    require('postcss-focus-visible')({
      preserve: false,
    }),
    require('postcss-nested')(),
    require('autoprefixer')(),
    require('postcss-csso')(),
  ],
};
