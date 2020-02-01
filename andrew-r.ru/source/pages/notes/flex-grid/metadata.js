const fs = require('fs');

module.exports = {
  title: 'Правильное выравнивание по ширине контейнера',
  publicationDate: new Date('2015-09-18 22:17:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
