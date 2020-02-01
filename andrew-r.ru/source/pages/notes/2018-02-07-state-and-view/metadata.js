const fs = require('fs');

module.exports = {
  title: 'Разделение состояния и представления',
  description: '',
  publicationDate: new Date('2018-02-07 18:31:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
