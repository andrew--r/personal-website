import { CollectionItem } from '#11ty/index.js';
import { formatNumber } from '#format/number.js';
import { formatShortDate } from '#format/short-date.js';
import { groupByPublicationYear } from '#lib/group-by-publication-year.js';
import { ChildContent } from '#ui/child-content/index.js';

type Props = {
  items: CollectionItem[];
  locale: string;
};

export function Books({ items, locale }: Props) {
  return (
    <>
      {groupByPublicationYear(items).map(([year, books]) => (
        <section id={`${year}`}>
          <h2>
            {year}{' '}
            <span class="text_muted">
              ({formatNumber(locale, books.length)})
            </span>
          </h2>

          <table class="dated-table">
            <tbody>
              {books.map((book) => (
                <tr>
                  <td>
                    <time datetime={book.page.date.toISOString()}>
                      {formatShortDate(locale, book.page.date)}
                    </time>
                  </td>
                  <td>
                    <a href={book.data.url}>{book.data.title}</a>
                    <ChildContent>{book.templateContent}</ChildContent>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </>
  );
}
