'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('run', function (cb) {
  switch (process.env.NODE_ENV) {
  case 'development':

    global.isProd = false;
    runSequence(['styles', 'fonts', 'images', 'views', 'browserify'], 'watch', cb);

    break;
  case 'production':

    global.isProd = true;
    runSequence(['styles', 'fonts', 'images', 'views', 'browserify'], 'gzip', cb);

    break;

  default:
    console.log('**************************************');
    console.log('********* NODE_ENV undefined *********');
    console.log('**************************************');
  }

});