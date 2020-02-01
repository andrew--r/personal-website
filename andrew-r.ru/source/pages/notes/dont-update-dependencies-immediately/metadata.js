const fs = require('fs');

module.exports = {
  title: 'Не спешите обновлять библиотеки',
  publicationDate: new Date('2018-03-12 20:35:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
