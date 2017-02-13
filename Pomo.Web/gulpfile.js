/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat') //for dist only
var ngAnnotate = require('gulp-ng-annotate') //for dist only

var paths = {
    scripts: ['app/**/*.js','app/**/*.ts', 'app/**/*.map'],
    libs: [
        //Angular
        'node_modules/angular/angular.min.js',
        'node_modules/@types/angular/index.d.ts',
        //Angular UI Router
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/@types/angular-ui-router',
        
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