/// <reference path="../../node_modules/@types/angular/index.d.ts" />

namespace app {
    "use strict";

    class ShellController {
        title: string;
        constructor() {
            this.title = "Hello World";
        }

    }

    angular.module("app").controller('ShellController', ShellController);
}