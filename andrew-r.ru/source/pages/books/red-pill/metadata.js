const fs = require('fs');

module.exports = {
  title: 'Красная таблетка',
  publicationDate: new Date('2018-05-11 20:00:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
