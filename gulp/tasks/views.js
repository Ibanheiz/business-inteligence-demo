'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var config       = require('../config');

gulp.task('views', function() {
  gulp.src(config.view.src)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.view.dest))
});