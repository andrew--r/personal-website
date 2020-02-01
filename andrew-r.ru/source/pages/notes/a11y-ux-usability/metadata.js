const fs = require('fs');

module.exports = {
  title: 'Может перестанем называть доступностью UX и юзабилити?',
  description: 'На слова «доступность» и «скринридер» в нашем сообществе уже распространился феномен баннерной слепоты. Почему так и что с этим делать?',
  publicationDate: new Date('2019-12-17 01:47:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
