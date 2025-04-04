import { Footer } from 'shared/ui/footer/index.js';
import { Banner } from 'shared/ui/banner/index.js';
import { Header } from '#includes/components/header/index.js';
import { Preload } from '#includes/preload.js';
import { EleventyProps } from 'shared/11ty/index.js';
import { withEleventyContext } from 'shared/11ty/context.js';

function Base({
  alternates,
  content,
  cover,
  description,
  langAlternates,
  title,
}: EleventyProps) {
  const formattedTitle = `${title}${title ? ' · ' : ''}Андрей Романов`;

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <Preload />

        <title>{formattedTitle}</title>
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:description" content={description} />

        {cover ? <meta property="og:image" content={cover.url} /> : null}

        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
        <link rel="stylesheet" href="/index.css" />

        {(alternates ?? []).map((item) => (
          <link rel="alternate" href={item.href} type={item.type} />
        ))}

        {(langAlternates ?? []).map((item) => (
          <link rel="alternate" hreflang={item.lang} href={item.href} />
        ))}
      </head>

      <body>
        <Banner text="Нет войне в Украине" />

        <div class="page">
          <Header className="page__header" />
          <main class="page__content">{content}</main>
          <Footer className="page__footer">
            <p>Этот сайт не следит за вами и не собирает никакие данные.</p>
          </Footer>
        </div>

        <style>{`
        @font-face {
          font-family: 'Fira Code';
          src: local('Fira Code'),
          url('/assets/fonts/fira-code/regular.woff2'),
          url('/assets/fonts/fira-code/regular.woff');
          font-weight: 400;
          font-display: swap;
        }
      `}</style>
      </body>
    </html>
  );
}

export default withEleventyContext(Base);
