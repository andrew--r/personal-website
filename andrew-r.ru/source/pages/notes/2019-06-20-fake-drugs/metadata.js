const fs = require('fs');

module.exports = {
  title: 'Расстрельный список препаратов',
  description: '',
  publicationDate: new Date('2019-06-20 23:40:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
