import { withEleventyContext } from 'shared/11ty/context.js';
import { Timeline } from 'shared/ui/timeline/index.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      langAlternates: [
        {
          href: 'https://andrew-r.ru',
          lang: 'ru',
        },
      ],
      title: 'Home',
    };
  }

  render = withEleventyContext(({ tools }) => {
    return (
      <div class="page-home">
        <h1 class="visuallyhidden">Andrey Romanov</h1>

        <div class="page-home__main content">
          <section>
            <h2 class="visuallyhidden">Introduction</h2>

            <p>
              <img
                alt="Personal photo"
                sizes="(max-width: 1000px) 100vw, 1000px"
                srcset="
            /assets/images/intro/400.jpg 400w,
            /assets/images/intro/600.jpg 600w,
            /assets/images/intro/800.jpg 800w,
            /assets/images/intro/1000.jpg 1000w"
                src="/assets/images/intro/1000.jpg"
                height="678"
                width="1000"
              />
            </p>

            <p>
              Hi! I’m a front-end web developer. I live in{' '}
              <span class="flag flag_omsk"></span> <s>Omsk, Russia</s> →
              Lisbon, Portugal and work at <s>Innova</s> → <s>Avito</s> →{' '}
              <s>Sticker.place</s> → <s>Joom</s> → Datadog. I’m passionate about
              design and music.
            </p>
          </section>

          <section>
            <h2>What I made</h2>

            <ul>
              <li>
                <a href="https://forwebdev.ru">For Web</a>, one of the largest
                russian front-end news aggregators
              </li>
              <li>
                <a href="https://github.com/andrew--r/frontend-case-studies">
                  frontend case studies
                </a>
                , a curated list of technical talks and articles about real
                world enterprise frontend development
              </li>
              <li>
                <a href="https://github.com/andrew--r/channels">channels</a>, a
                collection of useful YouTube channels for javascript developers
                and web designers
              </li>
              <li>
                <a href="https://github.com/andrew--r/hljs-alabaster">
                  hljs-alabaster
                </a>
                , Alabaster theme for highlight.js
              </li>
            </ul>
          </section>
        </div>

        <aside class="page-home__aside content">
          <section>
            <h2>Tools</h2>
            <p>
              What makes my life a bit easier:{' '}
              {tools
                .flatMap((item) => [<a href={item.url}>{item.name}</a>, ', '])
                .slice(0, -1)}
            </p>
          </section>

          <section>
            <h2>Timeline</h2>
            <p>
              Lifetime visualization. Each cell represents one week. There are
              52&nbsp;weeks in&nbsp;each row, which equals 1&nbsp;year. Past
              weeks are painted in&nbsp;red.
            </p>
            <Timeline />
          </section>
        </aside>
      </div>
    );
  });
}
