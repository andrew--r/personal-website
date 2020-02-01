const layout = require('../../partials/layout/template');
const getPostPagesByYear = require('../../../utils/get-post-pages-by-year');

const renderPost = (postPage) => `
<li class="notes__item">
  <a href="${postPage.url}">${postPage.metadata.title}</a>
</li>
`;

const renderPostsByYear = (currentPage) => {
  const postPagesByYear = getPostPagesByYear(currentPage.children.values());

  return postPagesByYear
    .map(
      ([year, postPages]) => `
      <section>
        <h2 class="h2">${year}</h2>
        <ul class="notes__list">
          ${postPages.map(renderPost).join('')}
        </ul>
      </section>
      `,
    )
    .join('');
};

const renderPage = ({ currentPage }) => `
<h1 class="visuallyhidden">Заметки</h1>
${renderPostsByYear(currentPage)}
`;

module.exports = (context) =>
  layout(context, renderPage(context), {
    headContent: `<link rel="stylesheet" href="${context.getPageAssetUrl(
      'notes.css',
    )}" />`,
  });
