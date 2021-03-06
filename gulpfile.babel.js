'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import nodemon from 'gulp-nodemon';
import cache from 'gulp-cached';

const sourceFiles = ['index.js', 'src/**/*.js'];

gulp.task('compile', _ => {
    return gulp.src(sourceFiles, {base: '.'})
      .pipe(cache('compile'))
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('build'));
});

gulp.task('copyPackageJson', _ => {
    return gulp.src('package.json')
      .pipe(gulp.dest('dist'));
});

gulp.task('dist', ['copyPackageJson'], _ => {
    return gulp.src(sourceFiles, {base: '.'})
      .pipe(babel())
      .pipe(gulp.dest('dist'));
});

gulp.task('compileMock', _ => {
    return gulp.src('mock-service/**/*.js', {base: '.'})
      .pipe(cache('compileMock'))
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('mock-service-dist'));
});

gulp.task('mock', ['compileMock'], _ => {
    return nodemon({
        script: 'mock-service-dist/mock-service/user-service.js',
        watch: ['mock-service/user-service.js'],
        tasks: ['compileMock']
    });
});

gulp.task('start', ['compile'], _ => {
  return nodemon({
      script: 'build/index.js',
      watch: ['index.js', 'src/**/*.js'],
      tasks: ['compile']
  });  
});

gulp.task('default', _ => {
  console.log('default task');
});
