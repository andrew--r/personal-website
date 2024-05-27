import { withEleventyContext } from 'shared/11ty/context.js';
import { formatNumber } from 'shared/format/number.js';
import { formatShortDate } from 'shared/format/short-date.js';
import { groupByPublicationYear } from 'shared/lib/group-by-publication-year.js';
import { ChildContent } from 'shared/ui/child-content/index.js';
import { Rating } from 'shared/ui/rating/index.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      title: 'Фильмы',
      description: 'Лог просмотренных мной фильмов',
    };
  }

  render = withEleventyContext(({ title, description, collections }) => (
    <>
      <h1>{title}</h1>
      <p class="subtitle">{description}</p>

      {groupByPublicationYear(collections.movies).map(([year, movies]) => (
        <section id={`${year}`}>
          <h2>
            {year}{' '}
            <span class="text_muted">
              ({formatNumber('ru', movies.length)})
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
                      {formatShortDate('ru', movie.page.date)}
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
  ));
}
