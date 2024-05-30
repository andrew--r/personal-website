import { withEleventyContext } from 'shared/11ty/context.js';
import { formatShortDate, formatNumber } from 'shared/format/index.js';
import { groupByPublicationYear } from 'shared/lib/group-by-publication-year.js';
import { ChildContent } from 'shared/ui/child-content/index.js';
import { Rating } from 'shared/ui/rating/index.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      title: 'Сериалы',
      description: 'Лог просмотренных мной сериалов',
    };
  }

  render = withEleventyContext(({ title, description, collections }) => (
    <>
      <h1>{title}</h1>
      <p class="subtitle">{description}</p>

      {groupByPublicationYear(collections.tvShows).map(([year, tvShows]) => (
        <section id={`${year}`}>
          <h2>
            {year}{' '}
            <span class="text_muted">
              ({formatNumber('ru', tvShows.length)})
            </span>
          </h2>

          <table class="dated-table">
            <tbody>
              {tvShows.map((tvShow) => (
                <tr>
                  <td>
                    <Rating value={tvShow.data.rating} />
                    <div>
                      {tvShow.data.seasons.length > 1 ? (
                        <>
                          {tvShow.data.seasons[0]}–{tvShow.data.seasons.at(-1)}
                          {' '}
                          сезоны
                        </>
                      ) : (
                        <>{tvShow.data.seasons[0]} сезон</>
                      )}
                    </div>
                    <time datetime={tvShow.page.date.toISOString()}>
                      {formatShortDate('ru', tvShow.page.date)}
                    </time>
                  </td>
                  <td>
                    <a href={tvShow.data.url}>{tvShow.data.title}</a>
                    <ChildContent>{tvShow.templateContent}</ChildContent>
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
