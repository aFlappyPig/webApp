var gulp = require('gulp');
// var less = require('gulp-less');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var minifyHtml = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var path = require('path');



//publish libs
gulp.task('libs', function () {
    gulp.src('bower_components/**/*.*')
        .pipe(gulp.dest('dist/libs'));
});

gulp.task('html', function () {
    gulp.src('src/**/*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('dist'));
});

var jsPath = ['src/**/*.js', '!src/libs/**/*', '!src/configs/**/*', '!src/config.js'];
gulp.task('js', function () {
    gulp.src(jsPath)
        .pipe(uglify())
        .pipe(gulp.dest('dist'));

    gulp.src(["src/configs/config.release.js"])
        .pipe(uglify())
        .pipe(rename("config.js"))
        .pipe(gulp.dest(path.join('dist')));
});

gulp.task('css', function () {
    gulp.src('src/**/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist'));
});

gulp.task('img', function () {
    gulp.src('src/app/commons/img/**/*', { base : 'src' })
        .pipe(gulp.dest('dist'));
});



gulp.task('default' , ['libs', 'html', 'css', 'js', 'img']);
