const fs = require('fs');

module.exports = {
  title: 'Блокировка рекламы на уровне DNS',
  publicationDate: new Date('2019-12-01 12:23:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
