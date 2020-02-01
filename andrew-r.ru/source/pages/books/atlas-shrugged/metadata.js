const fs = require('fs');

module.exports = {
  title: 'Атлант расправил плечи',
  publicationDate: new Date('2018-07-11 22:16:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
