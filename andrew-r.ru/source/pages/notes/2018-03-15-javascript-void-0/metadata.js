const fs = require('fs');

module.exports = {
  title: 'javascript:void(0)',
  description:
    'Очень распространённая ошибка, ухудшающая доступность интерфейсов.',
  publicationDate: new Date('2018-03-15 22:29:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
