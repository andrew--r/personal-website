const fs = require('fs');

module.exports = {
  title: 'Blogtrottr',
  description: 'Классный способ читать RSS.',
  publicationDate: new Date('2018-02-25 14:23:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
