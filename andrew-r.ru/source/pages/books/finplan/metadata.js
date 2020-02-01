const fs = require('fs');

module.exports = {
  title: 'Как составить личный финансовый план и как его реализовать',
  publicationDate: new Date('2018-08-25 20:47:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
