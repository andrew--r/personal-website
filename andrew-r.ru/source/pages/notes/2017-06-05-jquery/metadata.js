const fs = require('fs');

module.exports = {
  title: 'Почему в проектах 2017 года не нужна jQuery?',
  publicationDate: new Date('2017-06-05 12:22:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
