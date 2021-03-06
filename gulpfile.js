var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var pug = require('gulp-pug');

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('docs/css'));
});

gulp.task('default', ['sass','pug'], function() {
  gulp.watch(['scss/**/*.scss', 'docs/**/*.pug'], ['sass','pug']);
});

gulp.task('pug', function buildHTML() {
  return gulp.src('docs/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('docs/'));
});
