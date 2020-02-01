const fs = require('fs');

module.exports = {
  title: 'Как упростить тестирование Редакс-редьюсеров',
  publicationDate: new Date('2018-02-20 00:24:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
