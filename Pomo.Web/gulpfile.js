/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat'); //for dist only
var ngAnnotate = require('gulp-ng-annotate'); //for dist only
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer')
var exec = require('child_process').exec;

var typeScriptFiles = 'app/**/*.ts';
var paths = {
    scripts: ['app/**/*.js',typeScriptFiles, 'app/**/*.map'],
    views : ['index.html', 'app/**/*.html'],
    libs: [
        //Angular
        'node_modules/angular/angular.min.js',        
        //Angular UI Router
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        //All Typings
        'node_modules/@types/**/*.d.ts',
    ],
    styles: {
        src: 'app/assets/styles',
        files: 'app/assets/styles/**/*.scss',
        dest: 'wwwroot/styles'
    },
    appDestination : 'wwwroot/app'
};

gulp.task('lib', function () {
    gulp.src(paths.libs).pipe(gulp.dest('wwwroot/lib'));
});

gulp.task('clean', function () {
    return del(['wwwroot/app/**/*']).then(['wwwroot/styles/**/*']);
});

gulp.task('typescript', function(cb) { 
    exec('tsc', function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

// A display error function, to format and make custom errors more uniform
// Could be combined with gulp-util or npm colors for nicer output
var displayError = function(error) {
    // Initial building up of the error
    var errorString = '[' + error.plugin + ']';
    errorString += ' ' + error.message.replace("\n",''); // Removes new line at the end
    // If the error contains the filename or line number add it to the string
    if(error.fileName)
        errorString += ' in ' + error.fileName;
    if(error.lineNumber)
        errorString += ' on line ' + error.lineNumber;
    // This will output an error like the following:
    // [gulp-sass] error message in file_name on line 1
    console.error(errorString);
}
// Setting up the sass task - https://gist.github.com/mikestreety/9525414
gulp.task('sass', function (){
    // Taking the path from the above object
    gulp.src(paths.styles.files)
    // Sass options - make the output compressed and add the source map
    // Also pull the include path from the paths object
    .pipe(sass({
        outputStyle: 'compressed',
        sourceComments: 'map',
        includePaths : [paths.styles.src]
    }))
    // If there is an error, don't stop compiling but use the custom displayError function
    .on('error', function(err){
        displayError(err);
    })
    // Pass the compiled sass through the prefixer with defined 
    .pipe(prefix(
        'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
    ))
    // Funally put the compiled sass into a css file
    .pipe(gulp.dest(paths.styles.dest))
});

/* https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917#.a19vsw2wi */
gulp.task('default', ['lib', 'sass', 'typescript'], function () {
    gulp.src(paths.scripts.concat(paths.views))
        .pipe(gulp.dest(paths.appDestination));

    // Watch the files in the paths object, and when there is a change, fun the functions in the array
	gulp.watch(paths.styles.files, ['sass'])
    // Also when there is a change, display what file was changed, only showing the path after the 'sass folder'
	.on('change', function(evt) {
		console.log(
			'[watcher] File ' + evt.path+ ' was ' + evt.type + ', compiling...'
		);
	});

    gulp.watch(typeScriptFiles, ['typescript'])
    .on('change', function(evt) {		
        console.log(
			'[watcher] File ' + evt.path + ' was ' + evt.type + ', compiling...'
		);
	});
});