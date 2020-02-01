const fs = require('fs');

module.exports = {
  title: 'Сокращение рабочей недели',
  publicationDate: new Date('2019-09-22 00:02:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
