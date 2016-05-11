'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('compile', _ => {
    return gulp.src(['index.js', 'src/**/*.js'])
      .pipe(babel())
      .pipe(gulp.dest('dist'));
});

gulp.task('default', _ => {
  console.log('default task');
});
