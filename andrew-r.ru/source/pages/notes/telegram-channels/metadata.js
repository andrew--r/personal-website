const fs = require('fs');

module.exports = {
  title: 'Какие каналы читать в Телеграме',
  publicationDate: new Date('2017-09-16 15:42:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
