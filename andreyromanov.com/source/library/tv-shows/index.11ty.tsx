import { withEleventyContext } from 'shared/11ty/context.js';
import { TvShows } from 'shared/widgets/tv-shows/index.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      title: 'TV Shows',
      description: 'A running log of TV shows I’ve watched.',
    };
  }

  render = withEleventyContext(({ title, description, collections }) => (
    <>
      <h1>{title}</h1>
      <p class="subtitle">{description}</p>
      <TvShows items={collections.tvShows} locale="en" />
    </>
  ));
}
