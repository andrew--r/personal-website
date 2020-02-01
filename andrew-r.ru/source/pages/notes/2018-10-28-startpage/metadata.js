const fs = require('fs');

module.exports = {
  title: '​​Альтернатива DuckDuckGo',
  description: '',
  publicationDate: new Date('2018-10-28 13:50:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
