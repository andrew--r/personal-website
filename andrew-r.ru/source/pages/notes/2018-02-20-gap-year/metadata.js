const fs = require('fs');

module.exports = {
  title: 'Gap Year',
  description: '',
  publicationDate: new Date('2018-02-20 21:17:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
