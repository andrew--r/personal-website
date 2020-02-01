const fs = require('fs');

module.exports = {
  title: 'Форматирование дат и времени в браузере',
  publicationDate: new Date('2019-03-11 21:48:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
