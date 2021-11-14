'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

const buildStyles = () => {
  return gulp.src('./styles/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
}

gulp.task('compile-scss' , buildStyles)

gulp.task('watch', () => {
  gulp.watch('./styles/scss/*.scss', (done) => {
      gulp.series(['compile-scss'])(done)
  })
})
