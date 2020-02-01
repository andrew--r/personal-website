const fs = require('fs');

module.exports = {
  title: 'Отдельные стрелки на клавиатуре не нужны',
  description: '',
  publicationDate: new Date('2019-03-24 19:22:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
