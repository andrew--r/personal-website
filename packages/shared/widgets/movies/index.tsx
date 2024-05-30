import { CollectionItem } from '#11ty/index.js';
import { formatNumber, formatShortDate } from '#format/index.js';
import { groupByPublicationYear } from '#lib/group-by-publication-year.js';
import { ChildContent } from '#ui/child-content/index.js';
import { Rating } from '#ui/rating/index.js';

type Props = {
  items: CollectionItem[];
  locale: string;
};

export function Movies({ items, locale }: Props) {
  return (
    <>
      {groupByPublicationYear(items).map(([year, movies]) => (
        <section id={`${year}`}>
          <h2>
            {year}{' '}
            <span class="text_muted">
              ({formatNumber(locale, movies.length)})
            </span>
          </h2>

          <table class="dated-table">
            <tbody>
              {movies.map((movie) => (
                <tr>
                  <td>
                    <div>
                      <Rating value={movie.data.rating} />
                    </div>
                    <time datetime={movie.page.date.toISOString()}>
                      {formatShortDate(locale, movie.page.date)}
                    </time>
                  </td>
                  <td>
                    <a href={movie.data.url}>{movie.data.title}</a>
                    <ChildContent>{movie.templateContent}</ChildContent>
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
