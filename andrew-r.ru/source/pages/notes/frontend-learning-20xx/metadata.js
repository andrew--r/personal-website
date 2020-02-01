const fs = require('fs');

module.exports = {
  title: 'Чему учиться в 20** году, если вы — фронтенд-разработчик',
  publicationDate: new Date('2017-01-02 22:47:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
