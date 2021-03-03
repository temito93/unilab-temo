'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
//autoprefixer
const autoprefixer = require('gulp-autoprefixer');
//
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('scss/style/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
     }))
    .pipe(gulp.dest('css'));
});
 
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.parallel('sass'));
});