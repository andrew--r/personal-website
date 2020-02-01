const fs = require('fs');

module.exports = {
  title: 'Правозащита',
  description: '',
  publicationDate: new Date('2019-07-30 22:52:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
