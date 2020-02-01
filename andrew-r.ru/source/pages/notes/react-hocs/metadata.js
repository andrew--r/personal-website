const fs = require('fs');

module.exports = {
  title: 'Почему не стоит использовать компоненты высшего порядка в Реакте',
  publicationDate: new Date('2018-09-19 10:00:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
