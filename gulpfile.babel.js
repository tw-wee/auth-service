'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import nodemon from 'gulp-nodemon';

gulp.task('compile', _ => {
    return gulp.src(['index.js', 'src/**/*.js'])
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(concat('all.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'));
});

gulp.task('start', _ => {
  return nodemon({
      script: 'dist/all.js',
      watch: ['index.js', 'src/**/*.js'],
      tasks: ['compile']
  });  
});

gulp.task('default', _ => {
  console.log('default task');
});