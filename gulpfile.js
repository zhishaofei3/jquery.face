var gulp = require("gulp");
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var webpack = require('gulp-webpack');

// gulp.task('lint', function() {
//     return gulp.src('./jquery.qqface.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter());
// });

gulp.task('js', function() {
    return gulp.src('./src/index.js')
        .pipe(uglify())
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(rename('jquery.sinaface.min.js'))
        .pipe(gulp.dest('./'));
});