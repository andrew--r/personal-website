const fs = require('fs');

module.exports = {
  title: 'Организация шрифтов в проекте',
  publicationDate: new Date('2016-01-23 22:17:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
