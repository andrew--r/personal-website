const fs = require('fs');

module.exports = {
  title: 'Наука сна',
  description:
    'Легко читаемый и интересный обзор истории сна и его аспектов, подкреплённый результатами многочисленных исследований',
  publicationDate: new Date('2019-01-08 21:48:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
