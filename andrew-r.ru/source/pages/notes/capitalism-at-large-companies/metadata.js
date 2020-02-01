const fs = require('fs');

module.exports = {
  title: 'Как капитализм может помочь техническому отделу большой компании',
  publicationDate: new Date('2018-02-28 23:20:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
