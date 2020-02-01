const fs = require('fs');

module.exports = {
  title: 'Минутка рефакторинга №1',
  publicationDate: new Date('2017-03-17 21:34:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
