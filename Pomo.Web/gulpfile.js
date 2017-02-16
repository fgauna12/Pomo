"use strict";

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var tsc         = require('gulp-typescript');
var tsProject   = tsc.createProject('tsconfig.json');
var Config      = require('./gulpfile.config');
var del         = require('del');
var sourcemaps  = require('gulp-sourcemaps');

var config = new Config();

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(config.scss)
        .pipe(sass())
        .pipe(gulp.dest("./wwwroot"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

gulp.task('lib', function () {
    return gulp.src(config.libs).pipe(gulp.dest('wwwroot/lib'));
});

gulp.task('clean', function () {
    return del(['wwwroot/**/*']);
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                //path to typescript files
                         config.libraryTypeScriptDefinitions]; //reference to library .d.ts files

    gulp.src(config.allTypeScript).pipe(gulp.dest(config.tsOutputPath));

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.tsOutputPath));
});

// process JS files and return the stream. //The JS files are all outputs from typescript
gulp.task('js', function () { //todo not needed for debugging
    return gulp.src(config.watchJs)
        //.pipe(browserify())
        //.pipe(uglify())
        .pipe(gulp.dest('./'));
});

// process html views and return the stream.
gulp.task('html', function () { 
    return gulp.src(config.views)
                .pipe(gulp.dest('./wwwroot'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['lib', 'compile-ts', 'html', 'sass'], function () {

    // Serve files from the root of this project
    browserSync.init({
        proxy: "localhost:5000",
        // server: {
        //     baseDir: "./wwwroot"
        // }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(config.watchJs, ['js-watch']);
    gulp.watch(config.scss, ['sass']);
    gulp.watch(config.views, ['html']);
    gulp.watch("wwwroot/**/*.html").on('change', browserSync.reload);
    gulp.watch(config.allTypeScript, ['compile-ts']);
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve-mock', ['lib', 'compile-ts', 'html', 'sass'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./wwwroot"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(config.watchJs, ['js-watch']);
    gulp.watch(config.scss, ['sass']);
    gulp.watch(config.views, ['html']);
    gulp.watch("wwwroot/**/*.html").on('change', browserSync.reload);
    gulp.watch(config.allTypeScript, ['compile-ts']);
});