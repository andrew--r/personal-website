const fs = require('fs');

module.exports = {
  title: 'Стоит ли тестировать Реакт-компоненты',
  publicationDate: new Date('2018-03-07 09:30:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
