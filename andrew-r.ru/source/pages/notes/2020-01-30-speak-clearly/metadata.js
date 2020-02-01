const fs = require('fs');

module.exports = {
  title: 'Говорить в мире собеседника',
  description:
    'Иногда люди считают, что собеседник обладает не меньшими знаниями, чем они сами, и начинают грузить его ненужной, непонятной и часто страшно звучащей для него информацией. К счастью, это можно исправить.',
  publicationDate: new Date('2020-01-30 23:09:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
