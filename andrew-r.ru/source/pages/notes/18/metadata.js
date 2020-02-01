const fs = require('fs');

module.exports = {
  title: 'Совет самому себе',
  publicationDate: new Date('2015-11-16 08:31:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
