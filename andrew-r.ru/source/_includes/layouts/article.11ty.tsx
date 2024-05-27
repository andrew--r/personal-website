import { NotesSubscription } from '#includes/components/notes-subscription/index.js';
import { EleventyProps } from 'shared/11ty/index.js';
import { formatDate } from 'shared/format/index.js';
import { resolveContent } from 'shared/lib/resolve-content.js';

export default class ArticleLayout {
  data() {
    return {
      layout: 'base',
    };
  }

  render({
    cover,
    date,
    title,
    content,
    disableNotesSubscriptionWidget,
  }: EleventyProps) {
    return (
      <article
        class="article"
        itemtype="http://schema.org/BlogPosting"
        itemscope
      >
        <header class="article__header">
          {cover ? (
            <img
              src={cover.url}
              alt={cover.alt}
              width={cover.width}
              height={cover.height}
            />
          ) : null}

          <time
            class="text_muted"
            datetime={date.toISOString()}
            itemprop="datePublished"
          >
            {formatDate('ru', date)}
          </time>

          <h1 itemprop="name headline">{title}</h1>
        </header>

        <div
          class="content"
          itemprop="articleBody"
          {...resolveContent(content)}
        />

        {disableNotesSubscriptionWidget ? null : <NotesSubscription />}
      </article>
    );
  }
}
