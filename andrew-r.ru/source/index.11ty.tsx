import { withEleventyContext } from 'shared/11ty/context.js';
import { Timeline } from 'shared/ui/timeline/index.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      langAlternates: [
        {
          href: 'https://andreyromanov.com',
          lang: 'en',
        },
      ],
      title: 'Главная',
    };
  }

  render = withEleventyContext(({ tools }) => {
    return (
      <div class="page-home">
        <h1 class="visuallyhidden">Андрей Романов</h1>

        <div class="page-home__main content">
          <section>
            <h2 class="visuallyhidden">Обо мне</h2>

            <p>
              <img
                alt="Личное фото"
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
              Привет! Я живу в <span class="flag flag_omsk"></span> <s>Омске</s>
               → Лиссабоне и разрабатываю интерфейсы в <s>Innova</s> →{' '}
              <s>Avito</s> → <s>Sticker.place</s> → Joom. Люблю дизайн и музыку.
            </p>

            <p>
              С 2014 года веду <a href="https://forwebdev.ru">For Web</a>, одно
              из крупнейших русскоязычных{' '}
              <span class="nobr">фронтенд-сообществ</span> в{' '}
              <a href="https://vk.com/forwebdev">
                <span class="caps">ВК</span>
              </a>
              , <a href="https://t.me/forwebdev">Телеграме</a> и{' '}
              <a href="https://twitter.com/forwebdev">Твитере</a>.
            </p>

            <p class="paragraph">
              Веду <a href="/notes">блог</a> и{' '}
              <a href="https://t.me/andrew_r_notes">канал в Телеграме</a>. Писал
              и переводил статьи на{' '}
              <a href="http://frontender.info/">Frontender Magazine</a>,{' '}
              <a href="https://habrahabr.ru/users/andrew-r">Хабрахабре</a>,{' '}
              <a href="https://forwebdev.ru/">Форвебе</a> и{' '}
              <a href="https://hexlet.io/blog">Хекслете</a>.
            </p>
          </section>
        </div>

        <aside class="page-home__aside content">
          <section>
            <h2>Инструменты</h2>
            <p>
              Что облегчает мне жизнь:{' '}
              {tools
                .flatMap((item) => [<a href={item.url}>{item.name}</a>, ', '])
                .slice(0, -1)}
            </p>
          </section>

          <section>
            <h2>Таймлайн</h2>
            <p>
              Визуализация длительности жизни. Каждая клетка — одна неделя.
              В строке 52 недели, или 1 год. Прошедшие недели автоматически
              закрашиваются.
            </p>
            <Timeline />
          </section>
        </aside>
      </div>
    );
  });
}
