const fs = require('fs');

module.exports = {
  title: 'Закон Хика',
  description:
    'Чем больше вариантов выбора, тем больше времени нужно на принятие решения.',
  publicationDate: new Date('2017-12-24 15:25:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
