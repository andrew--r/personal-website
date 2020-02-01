const fs = require('fs');

module.exports = {
  title: 'Последний рабочий день в Авито',
  description: '',
  publicationDate: new Date('2018-02-02 23:05:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
