const fs = require('fs');

module.exports = {
  title: 'Визуальная семантика, или чем разметка отличается от стилей',
  publicationDate: new Date('2017-07-25 18:43:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
