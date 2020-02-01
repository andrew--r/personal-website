const fs = require('fs');

module.exports = {
  title: 'Глобальный .gitignore',
  description:
    'Глобальный .gitignore помогает не дублировать в локальных .gitignore файлы и директории, относящиеся к системе и инструментам разработки.',
  publicationDate: new Date('2020-01-14 22:11:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
