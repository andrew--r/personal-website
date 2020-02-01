const { format } = require('date-fns');
const renderMarkdown = require('../../../utils/markdown');

module.exports = (context) => {
  const {
    currentPage: { metadata },
  } = context;

  return `
  <article class="article" itemscope itemtype="http://schema.org/BlogPosting">
    <header class="article__header">
      <time datetime="${metadata.publicationDate.toISOString()}" itemprop="datePublished">
        ${format(metadata.publicationDate, 'DD.MM.YYYY')}
      </time>

      <h1 class="article__title h1" itemprop="name headline">
        ${metadata.title}
      </h1>
    </header>

    <div itemprop="articleBody">
      ${renderMarkdown(metadata.getMarkdownContent(), context)}
    </div>
  </article>
  `;
};
