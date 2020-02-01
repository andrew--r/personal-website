const fs = require('fs');

module.exports = {
  title: '«Цель» Голдратта',
  publicationDate: new Date('2018-08-16 17:50:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
