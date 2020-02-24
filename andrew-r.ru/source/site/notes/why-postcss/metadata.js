const fs = require('fs');

module.exports = {
  title: 'Зачем нужен PostCSS',
  publicationDate: new Date('2015-10-20 12:30:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
