/// <reference path="../node_modules/@types/angular-ui-router/index.d.ts" />
var app;
(function (app) {
    angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state({
            name: 'shell',
            url: '',
            controller: 'ShellController',
            controllerAs: 'vm',
            templateUrl: 'shell/shell.html',
            abstract: true
        })
            .state({
            name: 'shell.pomodoros',
            url: '/pomodoros',
            controller: 'PomodorosController',
            templateUrl: 'pomodoro/pomodoros.html',
        });
        $urlRouterProvider.otherwise('/pomodoros');
    });
})(app || (app = {}));
//# sourceMappingURL=app.router.js.map