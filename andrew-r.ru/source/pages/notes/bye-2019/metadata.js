const fs = require('fs');

module.exports = {
  title: 'Пока, 2019',
  description:
    'Фиксирую значимые для меня события за прошедший год и немного рефлексирую.',
  publicationDate: new Date('2019-12-30 23:32:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
