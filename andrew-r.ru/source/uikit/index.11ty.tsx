import { withEleventyContext } from 'shared/11ty/context.js';
import { Anchor } from 'shared/ui/anchor/index.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      title: 'UI Kit',
      description: 'Review of all UI styles',
    };
  }

  render = withEleventyContext(({ title, description }) => {
    return (
      <>
        <h1>{title}</h1>
        <p class="subtitle">{description}</p>

        <section>
          <p>
            Hi! I’m a front-end web developer. I live in <s>Omsk</s> → Moscow
            (Russia) and work at <s>Innova</s> → <s>Avito</s> →{' '}
            <s>Sticker.place</s> → Joom. I’m passionate about design and music.
          </p>

          <figure>
            <img
              sizes="(max-width: 800px) 100vw, 800px"
              srcset="
      /assets/images/intro/200.jpg 200w,
      /assets/images/intro/295.jpg 295w,
      /assets/images/intro/365.jpg 365w,
      /assets/images/intro/449.jpg 449w,
      /assets/images/intro/514.jpg 514w,
      /assets/images/intro/579.jpg 579w,
      /assets/images/intro/642.jpg 642w,
      /assets/images/intro/800.jpg 800w"
              src="/assets/images/intro/800.jpg"
              alt=""
            />
          </figure>
        </section>

        <section id="lists">
          <h2>
            <Anchor id="lists">Lists</Anchor>
          </h2>

          <p>Unordered list:</p>

          <ul>
            <li>
              <a href="https://forwebdev.ru">For Web</a>, one of the largest
              russian front-end news aggregators
            </li>
            <li>
              <a href="https://github.com/andrew--r/frontend-case-studies">
                frontend case studies
              </a>
              , a curated list of technical talks and articles about real world
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

          <p>Ordered list:</p>

          <ol>
            <li>
              <a href="https://forwebdev.ru">For Web</a>, one of the largest
              russian front-end news aggregators
            </li>
            <li>
              <a href="https://github.com/andrew--r/frontend-case-studies">
                frontend case studies
              </a>
              , a curated list of technical talks and articles about real world
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
          </ol>

          <p>Nested list:</p>

          <ul>
            <li>
              <a href="https://forwebdev.ru">For Web</a>, one of the largest
              russian front-end news aggregators
            </li>
            <li>
              <a href="https://github.com/andrew--r/frontend-case-studies">
                frontend case studies
              </a>
              , a curated list of technical talks and articles about real world
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
              <ul>
                <li>First nested item</li>
                <li>Second nested item</li>
                <li>Third and last nested item</li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="blockquotes">
          <h2>
            <Anchor id="blockquotes">Blockquotes</Anchor>
          </h2>

          <p>With footer:</p>

          <blockquote>
            <p>
              [It is] notable that the Feynman lectures (3 volumes) write about
              all of physics in 1800 pages, using only 2 levels of hierarchical
              headings: chapters and A-level heads in the text. It also uses the
              methodology of sentences which then cumulate sequentially into
              paragraphs, rather than the grunts of bullet points. Undergraduate
              Caltech physics is very complicated material, but it didn’t
              require an elaborate hierarchy to organize.
            </p>
            <footer>
              <cite>
                <a href="http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0000hB">
                  Edward Tufte, forum post, ‘Book design: advice and examples’
                  thread
                </a>
              </cite>
            </footer>
          </blockquote>

          <p>Without footer:</p>

          <blockquote>
            <p>We have to work not 12 hours, and head.</p>
          </blockquote>
        </section>

        <section id="headings">
          <h1>
            <Anchor id="headings">Headings (1)</Anchor>
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            tenetur eum libero culpa beatae expedita repellat perferendis! Fugit
            voluptas, exercitationem harum ipsam culpa molestias amet hic
            doloribus laudantium incidunt eligendi.
          </p>

          <h2>Heading 2</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            nihil eos repellendus illo voluptates veniam in facere explicabo
            omnis exercitationem, similique accusamus consequatur sed suscipit
            sint, illum perferendis repellat itaque.
          </p>

          <h3>Heading 3</h3>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            nihil eos repellendus illo voluptates veniam in facere explicabo
            omnis exercitationem, similique accusamus consequatur sed suscipit
            sint, illum perferendis repellat itaque.
          </p>
        </section>
      </>
    );
  });
}
