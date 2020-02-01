const fs = require('fs');

module.exports = {
  title: 'Скачивание изображений в IE10+',
  publicationDate: new Date('2016-03-23 09:30:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
