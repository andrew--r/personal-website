const fs = require('fs');

module.exports = {
  title:
    'Как я попробовал отказаться от лент соцсетей и почему эта затея провалилась',
  publicationDate: new Date('2016-05-04 22:34:00 +0600'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
