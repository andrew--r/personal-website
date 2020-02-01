const fs = require('fs');

module.exports = {
  title: 'Как сначала платить себе',
  description: '',
  publicationDate: new Date('2018-11-29 10:23:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
