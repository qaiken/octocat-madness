//---------------------------------
//
//  Lib dependencies handled thru browserify:
//  Ex: npm install --save-dev jquery
//  var $ = require('jquery'); in your script file
//
//---------------------------------

var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  browserify = require('gulp-browserify'),
  uglify = require('gulp-uglify'),
  srcs = require('../srcs');

gulp.task('js', function() {
  gulp.src(srcs.js.main)
    .pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});