const fs = require('fs');

module.exports = {
  title: 'Определяем видимость элемента с IntersectionObserver',
  description:
    'IntersectionObserver — это новый браузерный API, позволяющий асинхронно следить за степенью пересечения элемента с вьюпортом или другим элементом.',
  publicationDate: new Date('2018-01-20 13:56:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
