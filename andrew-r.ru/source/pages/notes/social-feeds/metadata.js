const fs = require('fs');

module.exports = {
  title: 'Ленты соцсетей — зло',
  publicationDate: new Date('2016-03-18 12:05:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
