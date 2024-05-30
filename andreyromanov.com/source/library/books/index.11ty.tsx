import { withEleventyContext } from 'shared/11ty/context.js';
import { formatNumber } from 'shared/format/number.js';
import { formatShortDate } from 'shared/format/short-date.js';
import { groupByPublicationYear } from 'shared/lib/group-by-publication-year.js';
import { ChildContent } from 'shared/ui/child-content/index.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      title: 'Books',
      description: 'A running log of books I’ve read.',
    };
  }

  render = withEleventyContext(({ title, description, collections }) => (
    <>
      <h1>{title}</h1>
      <p class="subtitle">{description}</p>

      {groupByPublicationYear(collections.books).map(([year, books]) => (
        <section id={`${year}`}>
          <h2>
            {year}{' '}
            <span class="text_muted">({formatNumber('en', books.length)})</span>
          </h2>

          <table class="dated-table">
            <tbody>
              {books.map((book) => (
                <tr>
                  <td>
                    <time datetime={book.page.date.toISOString()}>
                      {formatShortDate('en', book.page.date)}
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
  ));
}
