const fs = require('fs');

module.exports = {
  title: 'Почему стоит перейти с поиска Google на DuckDuckGo',
  description: '',
  publicationDate: new Date('2018-05-13 11:35:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
