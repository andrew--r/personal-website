const fs = require('fs');

module.exports = {
  title: '​​Кастомные элементы ГитХаба',
  description: '',
  publicationDate: new Date('2018-06-19 20:54:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
