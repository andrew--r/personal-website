const fs = require('fs');

module.exports = {
  title: 'Индикаторы правильности заполнения полей формы на CSS',
  publicationDate: new Date('2015-10-03 14:35:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
