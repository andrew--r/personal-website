const fs = require('fs');

module.exports = {
  title: 'Почему браузер читает CSS-селекторы справа налево',
  publicationDate: new Date('2018-06-05 00:45:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
