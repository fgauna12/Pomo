'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.source = './';
        this.sourceApp = this.source + 'app/';

        this.tsOutputPath = './wwwroot';
        this.allJavaScript = [this.source + '/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';
        this.scss = "app/**/*.scss";
        this.sourceMaps = "app/**/*.js.map";

        this.libraryTypeScriptDefinitions = './node_modules/@types/**/*d.ts';
        this.watchJs = "wwwroot/**/*js";
        this.views ='app/**/*.html';
        this.mainIndex = 'app/index.html';
        this.libs = [
            //Angular
            'node_modules/angular/angular.min.js',        
            //Angular UI Router
            'node_modules/angular-ui-router/release/angular-ui-router.js',
            //All Typings
            'node_modules/@types/**/*.d.ts',
            //SystemJs
            'node_modules/SystemJs/dist/system.js'
        ]
    }
    return gulpConfig;
})();
module.exports = GulpConfig;