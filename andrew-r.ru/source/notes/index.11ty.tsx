import { withEleventyContext } from 'shared/11ty/context.js';
import { formatShortDate } from 'shared/format/short-date.js';
import { groupByPublicationYear } from 'shared/lib/group-by-publication-year.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      title: 'Заметки',
      description: 'Статьи и заметки обо всём',
      alternates: [
        {
          href: '/notes/feed.xml',
          type: 'application/atom+xml',
        },
      ],
    };
  }

  render = withEleventyContext(({ title, collections }) => (
    <div class="content">
      <h1>
        {title}{' '}
        <sup>
          <a class="caps" href="feed.xml">
            RSS
          </a>
        </sup>
      </h1>

      {groupByPublicationYear(collections.notes ?? []).map(([year, items]) => (
        <section>
          <h2>{year}</h2>

          <table class="dated-table">
            <tbody>
              {items.map((item) => (
                <tr>
                  <td>
                    <time datetime={item.page.date.toISOString()}>
                      {formatShortDate('ru', item.page.date)}
                    </time>
                  </td>
                  <td>
                    <a href={item.page.url}>{item.data.title}</a>{' '}
                    {item.data.tags?.includes('favouriteNotes') ? '★' : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  ));
}
