const requireDir = require('require-dir');
const gulp = require('gulp');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', (done) => {
  gulp.series(
    'clean',
    gulp.parallel(gulp.series('assets', 'styles'), 'redirects'),
    gulp.parallel('markup', 'rss'),
  )(done);
});
