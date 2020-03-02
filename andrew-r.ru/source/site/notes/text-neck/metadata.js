const fs = require('fs');

module.exports = {
  title: 'Синдром text neck',
  publicationDate: new Date('2019-11-24 21:10:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
