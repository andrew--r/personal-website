const fs = require('fs');

module.exports = {
  title: 'Поиск работы фронтендером в 2016 году',
  publicationDate: new Date('2016-09-30 20:23:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
