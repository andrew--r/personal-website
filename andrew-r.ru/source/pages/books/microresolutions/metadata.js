const fs = require('fs');

module.exports = {
  title: 'Микрорешения. Проверенный путь к достижению больших целей',
  publicationDate: new Date('2018-01-13 00:22:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
