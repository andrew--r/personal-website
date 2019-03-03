const cacheBuster = require("@mightyplow/eleventy-plugin-cache-buster");

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(cacheBuster({}));

  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

  return {
    dir: {
      input: "source",
      output: "build"
    },
    templateFormats: ["njk", "md", "css", "jpg"],
    passthroughFileCopy: true
  };
};
