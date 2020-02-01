const fs = require('fs');

module.exports = {
  title: 'Тед Дзюба о трёх инструментах инженера',
  description:
    'Цель инженера — решить задачу, а не написать код. Для решения технических задач есть три основных инструмента.',
  publicationDate: new Date('2017-12-09 23:51:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
