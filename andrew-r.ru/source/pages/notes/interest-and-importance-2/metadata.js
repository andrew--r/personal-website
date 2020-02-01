const fs = require('fs');

module.exports = {
  title: '«Интерес и важность», часть 2',
  publicationDate: new Date('2016-01-24 22:22:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
