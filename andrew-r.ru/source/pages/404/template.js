const layout = require('../../partials/layout/template');

const renderPage = () => `
<h1 class="h1">404</h1>
<p>Страница не найдена</p>
`;

module.exports = (context) => layout(context, renderPage(context));
