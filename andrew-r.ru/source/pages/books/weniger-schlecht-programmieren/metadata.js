const fs = require('fs');

module.exports = {
  title: 'Программирование без дураков',
  publicationDate: new Date('2018-05-13 19:00:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
