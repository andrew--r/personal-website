const fs = require('fs');

module.exports = {
  title: 'О состоянии потока',
  publicationDate: new Date('2016-12-24 22:27:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
