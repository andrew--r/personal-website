const fs = require('fs');

module.exports = {
  title: 'Как быть пунктуальнее',
  publicationDate: new Date('2016-02-14 23:16:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
