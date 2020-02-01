const fs = require('fs');

module.exports = {
  title:
    'Почему в CSS нет селекторов, зависящих от текущего состояния раскладки',
  description:
    'Было бы удобно иметь псевдоклассы вроде `:stuck` для элементов с `position: sticky` или `:overflowing` для элементов, переполненных содержимым.',
  publicationDate: new Date('2018-02-04 14:06:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
