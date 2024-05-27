import { withEleventyContext } from 'shared/11ty/context.js';

export default class Page {
  data() {
    return {
      layout: 'base',
      title: 'Публикации',
      description: 'Авторские статьи и переводы',
    };
  }

  render = withEleventyContext(({ title, publications }) => (
    <div class="content">
      <h1>{title}</h1>

      <section>
        <h2>Авторские статьи</h2>

        <div class="publications">
          <Section collection={publications.articles.habr} title="Хабр" />
          <Section collection={publications.articles.hexlet} title="Хекслет" />
          <Section collection={publications.articles.forWeb} title="For Web" />
          <Section
            collection={publications.articles.frontenderMagazine}
            title="Frontender Magazine"
          />
        </div>
      </section>

      <section>
        <h2>Переводы</h2>

        <div class="publications">
          <Section collection={publications.translations.habr} title="Хабр" />
          <Section
            collection={publications.translations.frontenderMagazine}
            title="Frontender Magazine"
          />
          <Section
            collection={publications.translations.forWeb}
            title="For Web"
          />
        </div>
      </section>
    </div>
  ));
}

function ColumnItem({ title, url }: { title: string; url: string }) {
  return (
    <p>
      <a href={url}>{title}</a>
    </p>
  );
}

function Section({
  title,
  collection,
}: {
  title: string;
  collection: { title: string; url: string }[];
}) {
  return (
    <>
      <div class="publications__header">
        <h3>{title}</h3>
        <ColumnItem url={collection[0].url} title={collection[0].title} />
      </div>
      {collection.slice(1).map((item) => (
        <ColumnItem url={item.url} title={item.title} />
      ))}
    </>
  );
}

// {% macro section(title, collection) %}
//   <div class="publications__header">
//     <h3>{{ title }}</h3>
//     {{ columnItem(collection[0]) }}
//   </div>

//   {% for item in collection.slice(1) %}
//     {{ columnItem(item) }}
//   {% endfor %}
// {% endmacro %}
