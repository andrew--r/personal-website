const fs = require('fs');

module.exports = {
  title: 'Почему CSS-модули не могут заменить БЭМ',
  publicationDate: new Date('2017-10-08 17:07:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
