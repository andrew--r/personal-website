const fs = require('fs');

module.exports = {
  title: 'Пока, 2016',
  publicationDate: new Date('2016-12-18 20:52:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
