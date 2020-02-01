const fs = require('fs');

module.exports = {
  title:
    'Нужны ли CSS-препроцессоры в 2018 году, или насколько мы близки к ванильному CSS',
  description:
    'Среди разработчиков сейчас есть тенденция отказа от препроцессоров в пользу ванильного CSS. Давайте разберёмся, готова ли веб-платформа полностью заменить препроцессоры.',
  publicationDate: new Date('2018-01-08 23:35:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
