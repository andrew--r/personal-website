const gulp = require('gulp');
const buildConfig = require('./build-config');

gulp.task('css', () => {
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');

  return gulp
    .src(`${buildConfig.dir.source}/styles/index.css`)
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(buildConfig.dir.build));
});

gulp.task('watch', () => {
  gulp.watch(`${buildConfig.dir.source}/**/*.css`, gulp.series('css'));
});

gulp.task('default', (done) => {
  gulp.parallel('css')(done);
});
