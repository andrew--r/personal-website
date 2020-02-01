const fs = require('fs');

module.exports = {
  title: '«Интерес и важность», часть 1',
  publicationDate: new Date('2016-01-23 20:47:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
