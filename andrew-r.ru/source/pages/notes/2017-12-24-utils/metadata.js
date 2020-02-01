const fs = require('fs');

module.exports = {
  title: 'Утилитарные функции',
  description: '',
  publicationDate: new Date('2017-12-24 23:47:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
