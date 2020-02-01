const fs = require('fs');

module.exports = {
  title: 'Принцип: сначала платить себе',
  description:
    'Сначала платить себе — универсальный жизненный принцип, который помогает не уходить с головой в рабочую рутину, учиться и делать сайд-проекты.',
  publicationDate: new Date('2018-11-20 14:50:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
