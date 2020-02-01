const cn = require('classnames');

const renderItem = (context) => ({ url, title }) => {
  const isActive = context.currentPage.url === url;

  return `
  <li class="navigation__item">
    <a
      href="${url}"
      class="${cn('link', { link_active: isActive })}"
      ${isActive ? 'aria-current="page"' : ''}
    >${title}</a>
  </li>
  `;
};

module.exports = (context) => `
<nav class="navigation" aria-label="Страницы сайта">
  <ul class="navigation__list">
    ${context.siteData.navigationItems.map(renderItem(context)).join('')}
  </ul>
</nav>
`;
