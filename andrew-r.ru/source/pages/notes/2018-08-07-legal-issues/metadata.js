const fs = require('fs');

module.exports = {
  title: '​​​​Юридические вопросы',
  description: '',
  publicationDate: new Date('2018-08-07 20:54:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
