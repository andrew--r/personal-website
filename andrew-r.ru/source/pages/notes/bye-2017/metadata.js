const fs = require('fs');

module.exports = {
  title: 'Пока, 2017',
  publicationDate: new Date('2018-01-01 17:06:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
