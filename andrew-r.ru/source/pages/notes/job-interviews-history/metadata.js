const fs = require('fs');

module.exports = {
  title: 'История пройденных собеседований',
  publicationDate: new Date('2018-04-25 23:39:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
