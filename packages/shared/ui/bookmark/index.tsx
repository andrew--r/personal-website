import { CollectionItem } from '../../11ty/index.js';
import { hostFromUrl } from '../../lib/host-from-url.js';
import { ChildContent } from '../child-content/index.js';

type Props = {
  bookmark: CollectionItem;
};

export function Bookmark({ bookmark }: Props) {
  return (
    <article class="bookmark h-entry" id={bookmark.page.fileSlug}>
      <h2>
        <a href={bookmark.data.url} class="p-name u-bookmark-of">
          {bookmark.data.title}
        </a>
      </h2>
      <p class="text_muted">{hostFromUrl(bookmark.data.url)}</p>
      <ChildContent class="e-content">{bookmark.templateContent}</ChildContent>
    </article>
  );
}
