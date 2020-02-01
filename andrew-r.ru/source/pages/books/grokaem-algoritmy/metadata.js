const fs = require('fs');

module.exports = {
  title: 'Грокаем алгоритмы',
  publicationDate: new Date('2018-01-07 11:54:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
