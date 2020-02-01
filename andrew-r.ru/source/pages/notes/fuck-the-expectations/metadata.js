const fs = require('fs');

module.exports = {
  title: 'Не создавайте ожиданий',
  publicationDate: new Date('2016-02-08 10:41:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
