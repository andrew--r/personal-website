const fs = require('fs');

module.exports = {
  title: 'Как блокировка ВК на Украине отразилась на статистике Форвеба',
  description: '',
  publicationDate: new Date('2017-12-24 18:51:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
