const fs = require('fs');

module.exports = {
  title: 'Glimmer',
  description:
    'Краткое введение в Glimmer, бывший UI-движок Ember, выросший в отдельный проект.',
  publicationDate: new Date('2018-02-04 16:07:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
