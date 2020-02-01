const layout = require('../../partials/layout/template');

const renderPage = () => `
<h1 class="visuallyhidden">Таймлайн</h1>
<p class="paragraph">Визуализация длительности жизни. Каждая клетка — одна неделя. В строке 52 недели, или 1 год. Прошедшие недели автоматически закрашиваются.</p>

<div data-timeline-target class="timeline"></div>
<noscript>Для просмотра таймлайна JavaScript должен быть включен.</noscript>
`;

const renderHeadContent = (context) => `
<link rel="stylesheet" href="${context.getPageAssetUrl('index.css')}" />
<script async src="${context.getPageAssetUrl('index.js')}"></script>
`;

module.exports = (context) =>
  layout(context, renderPage(context), {
    headContent: renderHeadContent(context),
  });
