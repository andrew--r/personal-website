const fs = require('fs');

module.exports = {
  title: 'Организация файлов по фичам, а не техническим аспектам',
  publicationDate: new Date('2018-07-06 21:30:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
