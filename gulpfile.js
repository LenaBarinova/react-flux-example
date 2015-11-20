var gulp = require('gulp');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var del = require('del');

gulp.task('build', ['clean'], function () {
  return browserify({
    extensions: ['.jsx', '.js'],
    entries: 'app.jsx',
  })
    .transform(babelify.configure({ ignore: /(node_modules)/ }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('clean', function () {
  return del('./app.js');
});