const renderNavigation = require('./navigation/template');

const renderLangAlternates = (context) =>
  context.siteData.langAlternates.length === 0
    ? ''
    : `<sup>${context.siteData.langAlternates
        .map(({ href, lang }) => `<a href=${href}>${lang.toUpperCase()}</a>`)
        .join(' ')}</sup>`;

const renderLogo = (context) => {
  if (context.currentPage.url === '/') {
    return `
      <h1 class="header__logo">
        ${context.siteData.title}
        ${renderLangAlternates(context)}
      </h1>
    `;
  }

  return `
    <p class="header__logo">
      ${context.siteData.title}
      ${renderLangAlternates(context)}
    </p>
  `;
};

module.exports = (context) => `
<header class="header">
  <picture>
    <img class="header__avatar" src="${context.getAssetUrl(
      'images/avatar.jpg',
    )}" alt="">
  </picture>

  <div class="header__content">
    ${renderLogo(context)}
    ${renderNavigation(context)}
  </div>
</header>
`;
