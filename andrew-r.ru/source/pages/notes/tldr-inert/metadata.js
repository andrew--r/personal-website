const fs = require('fs');

module.exports = {
  title: 'Что за атрибут inert и зачем он нужен?',
  publicationDate: new Date('2017-06-22 22:22:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
