const layout = require('../../partials/layout/template');

const renderPage = () => `
<h1 class="visuallyhidden">Инструменты</h1>

<div class="article">
  <ul>
    <li><a href="https://code.visualstudio.com/">VS Code</a> как основной текстовый редактор, <a href="https://www.vim.org/">vim</a> как вспомогательный</li>
    <li><a href="https://sw.kovidgoyal.net/kitty/">kitty</a> как замена стандартного терминала</li>
    <li><a href="https://github.com/tonsky/FiraCode">Fira Code</a> как лучший шрифт для программирования</li>
    <li><a href="https://prettier.io/">Prettier</a> для форматирования кода</li>
    <li><a href="https://sketchapp.com/">Sketch</a> и <a href="https://www.figma.com/">Figma</a> для работы с дизайн-макетами и редактирования SVG</li>
    <li><a href="https://github.com/svg/svgo">svgo</a> и <a href="https://jakearchibald.github.io/svgomg/">GUI к нему</a> для минификации SVG</li>
    <li><a href="https://www.npmjs.com/package/live-server">live-server</a> для запуска локальных серверов</li>
    <li><a href="https://ngrok.com/">ngrok</a> для удалённого доступа к локальным серверам</li>
    <li><a href="https://git-scm.com/">git</a> для контроля версий</li>
    <li><a href="https://amplifr.com/">Amplifr</a> для ведения сообществ в соцсетях</li>
    <li><a href="https://www.notion.so/">Notion</a> для планирования и организации всего</li>
    <li><a href="https://simplenote.com/">Simplenote</a> для ведения заметок</li>
    <li><a href="https://blogtrottr.com/">Blogtrottr</a> для подписки на RSS-ленты</li>
    <li><a href="https://docs.google.com/spreadsheets/">Гугл-таблицы</a> для учёта личных доходов и расходов</li>
    <li><a href="https://wastd.ru">«Потрачено»</a> для учёта совместных расходов</li>
    <li><a href="https://culturedcode.com/things/">Things</a> для ведения списков дел</li>
  </ul>
</div>
`;

module.exports = (context) => layout(context, renderPage(context));
