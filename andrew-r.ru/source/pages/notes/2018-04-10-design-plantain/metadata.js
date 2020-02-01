const fs = require('fs');

module.exports = {
  title: 'Дизайн-подорожник',
  description:
    'Серия статей Александра Быкова с пошаговыми примерами улучшения дизайна городской среды',
  publicationDate: new Date('2018-04-10 00:38:00 +0300'),
  getMarkdownContent: () =>
    fs.readFileSync(`${__dirname}/content.md`).toString(),
};
