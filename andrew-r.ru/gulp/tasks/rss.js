const { flatMap, take } = require('lodash');
const gulp = require('gulp');
const gulpFile = require('gulp-file');
const { Feed } = require('feed');
const config = require('../../build.config');
const parsePagesTree = require('../../utils/parse-pages-tree');
const getPostPagesByYear = require('../../utils/get-post-pages-by-year');
const renderMarkdown = require('../../utils/markdown');
const { getRevManifest, getPageAssetUrl } = require('../utils/revisions');

gulp.task('rss', () => {
  const siteData = require(`${config.paths.source}/data`);
  const pagesTree = parsePagesTree(`${config.paths.source}/pages`);
  const revManifest = getRevManifest();
  const notes = Array.from(pagesTree.get('notes').children.values());
  const books = Array.from(pagesTree.get('books').children.values());

  const postPagesByYear = getPostPagesByYear([...notes, ...books]);
  const allPosts = flatMap(postPagesByYear, ([, posts]) => posts);
  const lastYearPosts = postPagesByYear[0][1];
  const lastUpdateDate = lastYearPosts[0].metadata.publicationDate;

  const feed = new Feed({
    title: siteData.title,
    description: siteData.description,
    id: siteData.url,
    link: siteData.url,
    updated: lastUpdateDate,
    author: {
      name: siteData.author.name,
      email: siteData.author.email,
    },
  });

  take(allPosts, 10).forEach((post) => {
    feed.addItem({
      title: post.metadata.title,
      date: post.metadata.publicationDate,
      link: `${siteData.url}${post.url}`,
      content: renderMarkdown(post.metadata.getMarkdownContent(), {
        getPageAssetUrl: (assetPath) =>
          `${siteData.url}${getPageAssetUrl(revManifest)(post.path)(
            assetPath,
          )}`,
      }),
    });
  });

  return gulpFile('feed.xml', feed.atom1(), { src: true }).pipe(
    gulp.dest(config.paths.build),
  );
});
