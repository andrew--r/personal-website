const fs = require('fs');

module.exports = {
  title: 'Пока, 2018',
  description:
    'Пользуюсь возможностью порефлексировать и вспомнить значимые для меня события за прошедший год',
  publicationDate: new Date('2018-12-29T16:20:49.527Z'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
