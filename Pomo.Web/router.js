/// <reference path="../node_modules/@types/angular-ui-router/index.d.ts" />
var app;
(function (app) {
    angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('shell', {
            url: '',
            controller: 'ShellController',
            controllerAs: 'vm',
            templateUrl: 'app/shell/shell.html',
            abstract: true
        })
            .state('shell.pomodoros', {
            url: '/pomodoros',
            controller: 'PomodorosController',
            controllerAs: 'vm',
            templateUrl: 'app/pomodoro/pomodoros.html'
        });
        $urlRouterProvider.otherwise('/pomodoros');
    });
})(app || (app = {}));
