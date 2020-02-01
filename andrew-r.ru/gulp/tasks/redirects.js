const gulp = require('gulp');
const config = require('../../build.config');

gulp.task('redirects', () => {
  return gulp.src(`${config.paths.source}`).pipe(gulp.dest(config.paths.build));
});
