﻿/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat') //for dist only
var ngAnnotate = require('gulp-ng-annotate') //for dist only

var paths = {
    scripts: ['scripts/**/*.js','scripts/**/*.ts', 'scripts/**/*.map'],
    libs: [
        'node_modules/angular/angular.min.js',
        'node_modules/@types/angular/index.d.ts'
    ]
};

gulp.task('lib', function () {
    gulp.src(paths.libs).pipe(gulp.dest('wwwroot/scripts/lib'));
});

gulp.task('clean', function () {
    return del(['wwwroot/scripts/**/*']);
});

/* https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917#.a19vsw2wi */
gulp.task('default', ['lib'], function () {
    gulp.src(paths.scripts)
        .pipe(gulp.dest('wwwroot/scripts'));
});