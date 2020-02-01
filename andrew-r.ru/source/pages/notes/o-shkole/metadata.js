const fs = require('fs');

module.exports = {
  title: 'О школе',
  publicationDate: new Date('2015-09-12 22:47:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
