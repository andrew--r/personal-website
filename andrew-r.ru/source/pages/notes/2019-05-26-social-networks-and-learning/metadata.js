const fs = require('fs');

module.exports = {
  title: 'Как соцсети и интернет мешают учиться и как с этим бороться',
  description: '',
  publicationDate: new Date('2019-05-26 22:00:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
