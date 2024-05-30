import { CollectionItem } from '#11ty/index.js';
import { formatNumber } from '#format/number.js';
import { formatShortDate } from '#format/short-date.js';
import { groupByPublicationYear } from '#lib/group-by-publication-year.js';
import { ChildContent } from '#ui/child-content/index.js';
import { Rating } from '#ui/rating/index.js';

type Props = {
  items: CollectionItem[];
  locale: string;
};
export function TvShows({ items, locale }: Props) {
  return (
    <>
      {groupByPublicationYear(items).map(([year, tvShows]) => (
        <section id={`${year}`}>
          <h2>
            {year}{' '}
            <span class="text_muted">
              ({formatNumber(locale, tvShows.length)})
            </span>
          </h2>

          <table class="dated-table">
            <tbody>
              {tvShows.map((tvShow) => (
                <tr>
                  <td>
                    <Rating value={tvShow.data.rating} />
                    <Seasons locale={locale} tvShow={tvShow} />
                    <time datetime={tvShow.page.date.toISOString()}>
                      {formatShortDate(locale, tvShow.page.date)}
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
  );
}

function Seasons({
  locale,
  tvShow,
}: {
  locale: string;
  tvShow: CollectionItem;
}) {
  switch (locale) {
    case 'en': {
      return (
        <div>
          {tvShow.data.seasons.length > 1 ? (
            <>
              Seasons {tvShow.data.seasons[0]}–{tvShow.data.seasons.at(-1)}
            </>
          ) : (
            <>Season {tvShow.data.seasons[0]}</>
          )}
        </div>
      );
    }

    case 'ru': {
      return (
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
      );
    }

    default: {
      throw new Error('Unsupported locale');
    }
  }
}
