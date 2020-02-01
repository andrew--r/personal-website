const layout = require('../partials/layout/template');

const renderPage = () => `
<div class="introduction">
  <p class="paragraph">Живу в&nbsp;<span class="muted">Омске&nbsp;→</span> Москве, разрабатываю интерфейсы в&nbsp;<span class="muted">Innova&nbsp;→ Avito&nbsp;→ Sticker.place&nbsp;→</span> Joom.</p>

  <p class="paragraph">С 2014 года веду <a href="https://forwebdev.ru">For Web</a>, одно из&nbsp;крупнейших русскоязычных <span class="nobr">фронтенд-сообществ</span> в&nbsp;<a href="https://vk.com/forwebdev"><span class="caps">ВК</span></a>, <a href="https://t.me/forwebdev">Телеграме</a> и&nbsp;<a href="https://twitter.com/forwebdev">Твитере</a>.</p>

  <p class="paragraph">Веду <a href="/notes">блог</a> и <a href="https://t.me/andrew_r_notes">канал в Телеграме</a>. Писал и переводил статьи на <a href="http://frontender.info/">Frontender Magazine</a>, <a href="https://habrahabr.ru/users/andrew-r">Хабрахабре</a>, <a href="https://forwebdev.ru/">Форвебе</a> и <a href="https://hexlet.io/blog">Хекслете</a>.</p>
</div>
`;

const renderHeadContent = (context) => `
<link rel="stylesheet" href="${context.getPageAssetUrl('index.css')}" />
`;

module.exports = (context) =>
  layout(context, renderPage(context), {
    headContent: renderHeadContent(context),
  });
