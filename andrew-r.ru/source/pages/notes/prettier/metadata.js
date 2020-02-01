const fs = require('fs');

module.exports = {
  title: 'Prettier',
  publicationDate: new Date('2018-03-10 21:48:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
