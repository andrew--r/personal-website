const fs = require('fs');

module.exports = {
  title: 'UX установки программ на Windows',
  description: '',
  publicationDate: new Date('2018-02-03 17:32:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
