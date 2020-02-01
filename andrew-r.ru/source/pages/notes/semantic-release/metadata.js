const fs = require('fs');

module.exports = {
  title: '​​Автоматизация релизов с помощью semantic-release',
  publicationDate: new Date('2018-09-30 15:19:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
