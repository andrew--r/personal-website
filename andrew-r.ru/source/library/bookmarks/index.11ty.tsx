import { withEleventyContext } from 'shared/11ty/context.js';
import { Bookmark } from 'shared/ui/bookmark/index.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      title: 'Закладки',
      description: 'Стоящие внимания интернет-материалы',
    };
  }

  render = withEleventyContext(({ title, description, collections }) => (
    <>
      <h1>{title}</h1>
      <p class="subtitle">{description}</p>

      {collections.bookmarks
        .toSorted(
          (a, b) =>
            parseInt(b.page.fileSlug, 10) - parseInt(a.page.fileSlug, 10),
        )
        .map((item) => (
          <Bookmark bookmark={item} />
        ))}
    </>
  ));
}
