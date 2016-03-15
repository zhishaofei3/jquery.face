var gulp = require("gulp");
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require("gulp-rename");
var webpack = require('gulp-webpack');
var removeFiles = require('gulp-remove-files');

var css2js = require("gulp-css2js");


gulp.task('css', function() {
    return gulp.src('src/**/*.css')
        .pipe(css2js())
        .pipe(gulp.dest("./src/"));
});

gulp.task('lint', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter());
});

gulp.task('js', function() {
    return gulp.src('./src/index.js')
        .pipe(uglify())
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(rename('jquery.face.min.js'))
        .pipe(gulp.dest('./'));
});