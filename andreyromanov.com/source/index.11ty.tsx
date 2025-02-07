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
              <s>Sticker.place</s> → <s>Joom</s> →{' '}
              <span class="nobr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xml:space="preserve"
                  style="vertical-align: middle;"
                  height="1lh"
                  viewBox="0 0 800.55 856.85"
                >
                  <path
                    d="m670.38 608.27-71.24-46.99-59.43 99.27-69.12-20.21-60.86 92.89 3.12 29.24 330.9-60.97-19.22-206.75-54.15 113.52zm-308.59-89.14 53.09-7.3c8.59 3.86 14.57 5.33 24.87 7.95 16.04 4.18 34.61 8.19 62.11-5.67 6.4-3.17 19.73-15.36 25.12-22.31l217.52-39.46 22.19 268.56-372.65 67.16-32.25-268.93zm404.06-96.77-21.47 4.09L703.13.27.27 81.77l86.59 702.68 82.27-11.94c-6.57-9.38-16.8-20.73-34.27-35.26-24.23-20.13-15.66-54.32-1.37-75.91 18.91-36.48 116.34-82.84 110.82-141.15-1.98-21.2-5.35-48.8-25.03-67.71-.74 7.85.59 15.41.59 15.41s-8.08-10.31-12.11-24.37c-4-5.39-7.14-7.11-11.39-14.31-3.03 8.33-2.63 17.99-2.63 17.99s-6.61-15.62-7.68-28.8c-3.92 5.9-4.91 17.11-4.91 17.11s-8.59-24.62-6.63-37.88c-3.92-11.54-15.54-34.44-12.25-86.49 21.45 15.03 68.67 11.46 87.07-15.66 6.11-8.98 10.29-33.5-3.05-81.81-8.57-30.98-29.79-77.11-38.06-94.61l-.99.71c4.36 14.1 13.35 43.66 16.8 57.99 10.44 43.47 13.24 58.6 8.34 78.64-4.17 17.42-14.17 28.82-39.52 41.56-25.35 12.78-58.99-18.32-61.12-20.04-24.63-19.62-43.68-51.63-45.81-67.18-2.21-17.02 9.81-27.24 15.87-41.16-8.67 2.48-18.34 6.88-18.34 6.88s11.54-11.94 25.77-22.27c5.89-3.9 9.35-6.38 15.56-11.54-8.99-.15-16.29.11-16.29.11s14.99-8.1 30.53-14c-11.37-.5-22.25-.08-22.25-.08s33.45-14.96 59.87-25.94c18.17-7.45 35.92-5.25 45.89 9.17 13.09 18.89 26.84 29.15 55.98 35.51 17.89-7.93 23.33-12.01 45.81-18.13 19.79-21.76 35.33-24.58 35.33-24.58s-7.71 7.07-9.77 18.18c11.22-8.84 23.52-16.22 23.52-16.22s-4.76 5.88-9.2 15.22l1.03 1.53c13.09-7.85 28.48-14.04 28.48-14.04s-4.4 5.56-9.56 12.76c9.87-.08 29.89.42 37.66 1.3 45.87 1.01 55.39-48.99 72.99-55.26 22.04-7.87 31.89-12.63 69.45 24.26 32.23 31.67 57.41 88.36 44.91 101.06-10.48 10.54-31.16-4.11-54.08-32.68-12.11-15.13-21.27-33.01-25.56-55.74-3.62-19.18-17.71-30.31-17.71-30.31S520 92.95 520 109.01c0 8.77 1.1 41.56 15.16 59.96-1.39 2.69-2.04 13.31-3.58 15.34-16.36-19.77-51.49-33.92-57.22-38.09 19.39 15.89 63.96 52.39 81.08 87.37 16.19 33.08 6.65 63.4 14.84 71.25 2.33 2.25 34.82 42.73 41.07 63.07 10.9 35.45.65 72.7-13.62 95.81l-39.85 6.21c-5.83-1.62-9.76-2.43-14.99-5.46 2.88-5.1 8.61-17.82 8.67-20.44l-2.25-3.95c-12.4 17.57-33.18 34.63-50.44 44.43-22.59 12.8-48.63 10.83-65.58 5.58-48.11-14.84-93.6-47.35-104.57-55.89 0 0-.34 6.82 1.73 8.35 12.13 13.68 39.92 38.43 66.78 55.68l-57.26 6.3 27.07 210.78c-12 1.72-13.87 2.56-27.01 4.43-11.58-40.91-33.73-67.62-57.94-83.18-21.35-13.72-50.8-16.81-78.99-11.23l-1.81 2.1c19.6-2.04 42.74.8 66.51 15.85 23.33 14.75 42.13 52.85 49.05 75.79 8.86 29.32 14.99 60.68-8.86 93.92-16.97 23.63-66.51 36.69-106.53 8.44 10.69 17.19 25.14 31.25 44.59 33.9 28.88 3.92 56.29-1.09 75.16-20.46 16.11-16.56 24.65-51.19 22.4-87.66l25.49-3.7 9.2 65.46 421.98-50.81-34.43-335.8zM509.12 244.59c-1.18 2.69-3.03 4.45-.25 13.2l.17.5.44 1.13 1.16 2.62c5.01 10.24 10.51 19.9 19.7 24.83 2.38-.4 4.84-.67 7.39-.8 8.63-.38 14.08.99 17.54 2.85.31-1.72.38-4.24.19-7.95-.67-12.97 2.57-35.03-22.36-46.64-9.41-4.37-22.61-3.02-27.01 2.43.8.1 1.52.27 2.08.46 6.65 2.33 2.14 4.62.95 7.37m69.87 121.02c-3.27-1.8-18.55-1.09-29.29.19-20.46 2.41-42.55 9.51-47.39 13.29-8.8 6.8-4.8 18.66 1.7 23.53 18.23 13.62 34.21 22.75 51.08 20.53 10.36-1.36 19.49-17.76 25.96-32.64 4.43-10.25 4.43-21.31-2.06-24.9M397.85 260.65c5.77-5.48-28.74-12.68-55.52 5.58-19.75 13.47-20.38 42.35-1.47 58.72 1.89 1.62 3.45 2.77 4.91 3.71 5.52-2.6 11.81-5.23 19.05-7.58 12.23-3.97 22.4-6.02 30.76-7.11 4-4.47 8.65-12.34 7.49-26.59-1.58-19.33-16.23-16.26-5.22-26.73"
                    style="fill-rule:evenodd;clip-rule:evenodd;fill:#632ca6"
                  />
                </svg>{' '}
                Datadog
              </span>
              . I’m passionate about design and music.
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
                <a href="https://frontendcs.com">Frontend Case Studies</a>, a
                curated list of technical talks and articles about real world
                enterprise frontend development
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
