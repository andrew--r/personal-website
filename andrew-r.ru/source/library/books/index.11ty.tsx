import { withEleventyContext } from 'shared/11ty/context.js';
import { Books } from 'shared/widgets/books/index.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      title: 'Книги',
      description: 'Лог прочитанных мной книг',
    };
  }

  render = withEleventyContext(({ title, description, collections }) => (
    <>
      <h1>{title}</h1>
      <p class="subtitle">{description}</p>
      <Books items={collections.books} locale="ru" />
    </>
  ));
}
