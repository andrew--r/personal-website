const fs = require('fs');

module.exports = {
  title: 'О состоянии фронтенд-экосистемы',
  description: 'Принцип единственности ответственности? Не, не слышали.',
  publicationDate: new Date('2018-03-23 21:27:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
