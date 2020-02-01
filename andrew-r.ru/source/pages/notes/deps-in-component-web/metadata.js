const fs = require('fs');

module.exports = {
  title: 'Зависимости в компонентном вебе',
  publicationDate: new Date('2017-04-16 21:44:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
