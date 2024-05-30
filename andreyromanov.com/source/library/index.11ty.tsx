import { withEleventyContext } from 'shared/11ty/context.js';
import { formatNumber } from 'shared/format/number.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      title: 'Library',
      description:
        'A running log of everything I read or watch: movies, TV shows, books, articles.',
    };
  }

  render = withEleventyContext(({ title, description, collections }) => (
    <>
      <h1>{title}</h1>
      <p class="subtitle">{description}</p>

      <ul>
        <li>
          <a href="/library/books">Books</a>{' '}
          <span class="text_muted">
            ({formatNumber('en', collections.books.length)})
          </span>
        </li>

        <li>
          <a href="/library/bookmarks">Bookmarks</a>{' '}
          <span class="text_muted">
            ({formatNumber('en', collections.bookmarks.length)})
          </span>
        </li>

        <li>
          <a href="/library/movies">Movies</a>{' '}
          <span class="text_muted">
            ({formatNumber('en', collections.movies.length)})
          </span>
        </li>

        <li>
          <a href="/library/tv-shows">TV shows</a>{' '}
          <span class="text_muted">
            ({formatNumber('en', collections.tvShows.length)})
          </span>
        </li>
      </ul>
    </>
  ));
}
