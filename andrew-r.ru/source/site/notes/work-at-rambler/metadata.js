const fs = require('fs');

module.exports = {
  title: 'Мой опыт работы в Рамблере',
  publicationDate: new Date('2017-03-06 22:29:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
