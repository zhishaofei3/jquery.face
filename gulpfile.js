var gulp = require("gulp");
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var webpack = require('gulp-webpack');
var removeFiles = require('gulp-remove-files');

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


gulp.task('rename', function() {


    var face = require('./src/config.js');



    face.forEach(function(item, index) {

        var en = item.en;



        item.data.forEach(function(d, index) {


            var dist = "./face/" + en;
            var src = "./face/" + en + "/" + d.split(',')[0] + "_thumb.gif";



            gulp.src(src)
                .pipe(rename(function(path) {
                    console.log(src, index, path);
                    path.basename = index;
                }))
                .pipe(gulp.dest(dist)); // ./dist/main/text/ciao/hello-goodbye.md

        });
    });



});