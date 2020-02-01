const fs = require('fs');

module.exports = {
  title: 'Learning How to Learn',
  description: '',
  publicationDate: new Date('2019-05-03 17:17:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
