/// <reference path="../../node_modules/@types/angular/index.d.ts" />
var app;
(function (app) {
    "use strict";
    var ShellController = (function () {
        function ShellController() {
            this.title = "Hello World";
        }
        return ShellController;
    }());
    angular.module("app").controller('ShellController', ShellController);
})(app || (app = {}));
//# sourceMappingURL=shell.js.map