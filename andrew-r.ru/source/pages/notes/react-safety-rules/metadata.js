const fs = require('fs');

module.exports = {
  title: 'Правила безопасности при разработке на Реакте',
  publicationDate: new Date('2018-02-09 22:47:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
