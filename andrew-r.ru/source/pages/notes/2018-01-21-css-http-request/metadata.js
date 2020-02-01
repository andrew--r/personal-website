const fs = require('fs');

module.exports = {
  title: 'Отправка запросов к серверу через CSS',
  description:
    'На собеседованиях иногда просят назвать способы отправки запроса на сервер. Помимо очевидных `fetch`, `XMLHttpRequest` и прочих джаваскриптовых штук, есть более экзотические способы.',
  publicationDate: new Date('2018-01-21 13:25:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
