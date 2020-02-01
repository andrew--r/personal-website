const fs = require('fs');

module.exports = {
  title: 'Импорт модулей относительно проекта, а не текущего файла',
  description:
    'Как перестать беспокоиться о ../../../ в импортах и начать жить',
  publicationDate: new Date('2018-04-04 00:00:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
