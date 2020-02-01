const fs = require('fs');

module.exports = {
  title:
    'Не нужно читать технические книги, потому что они быстро устаревают (нет)',
  publicationDate: new Date('2018-03-10 23:17:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
