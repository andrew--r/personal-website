const htmlMinifier = require('html-minifier');

const minifiableFilesExtensions = ['html', 'xml'];

function minifyMarkup() {
  return (content, outputPath) => {
    if (
      minifiableFilesExtensions.some((extension) =>
        outputPath.endsWith(`.${extension}`),
      )
    ) {
      return htmlMinifier.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
        keepClosingSlash: outputPath.endsWith('.xml'),
      });
    }

    return content;
  };
}

module.exports = { minifyMarkup };
