const fs = require('fs');

module.exports = {
  title: 'Форматирование чисел в браузере',
  description:
    'Если вам нужно отформатировать числа в браузере, не подключайте для этого сторонние библиотеки и не пишите велосипеды, а используйте нативный Intl.NumberFormat.',
  publicationDate: new Date('2017-12-10 18:00:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
