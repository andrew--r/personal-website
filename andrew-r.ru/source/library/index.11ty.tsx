import { withEleventyContext } from 'shared/11ty/context.js';
import { formatNumber } from 'shared/format/number.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      title: 'Библиотека',
      description:
        'Пополняемый список всего, что я смотрю и читаю: фильмы, сериалы, книги, статьи, доклады',
    };
  }

  render = withEleventyContext(({ title, description, collections }) => (
    <>
      <h1>{title}</h1>
      <p class="subtitle">{description}</p>

      <ul>
        <li>
          <a href="/library/books">Книги</a>{' '}
          <span class="text_muted">
            ({formatNumber('ru', collections.books.length)})
          </span>
        </li>

        <li>
          <a href="/library/bookmarks">Закладки</a>{' '}
          <span class="text_muted">
            ({formatNumber('ru', collections.bookmarks.length)})
          </span>
        </li>

        <li>
          <a href="/library/movies">Фильмы</a>{' '}
          <span class="text_muted">
            ({formatNumber('ru', collections.movies.length)})
          </span>
        </li>

        <li>
          <a href="/library/tv-shows">Сериалы</a>{' '}
          <span class="text_muted">
            ({formatNumber('ru', collections.tvShows.length)})
          </span>
        </li>
      </ul>
    </>
  ));
}
