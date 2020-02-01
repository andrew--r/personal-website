const fs = require('fs');

module.exports = {
  title: 'Плоти нологи',
  description:
    'Считаю, что одно из лучших решений для повышения сознательности граждан — переложить отвественность за уплату налогов с работодателей на сотрудников.',
  publicationDate: new Date('2019-10-15 23:30:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
