import { withEleventyContext } from 'shared/11ty/context.js';
import { Movies } from 'shared/widgets/movies/index.js';

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
      <Movies items={collections.movies} locale="ru" />
    </>
  ));
}
