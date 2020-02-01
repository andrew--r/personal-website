const fs = require('fs');

module.exports = {
  title: 'Тонкое искусство пофигизма',
  description:
    'Легко читаемый и интересный обзор истории сна и его аспектов, подкреплённый результатами многочисленных исследований',
  publicationDate: new Date('2019-01-21 17:32:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
