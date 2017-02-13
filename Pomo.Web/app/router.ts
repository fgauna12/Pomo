/// <reference path="../node_modules/@types/angular-ui-router/index.d.ts" />

namespace app { 
    angular.module('app').config(($stateProvider : angular.ui.IStateProvider, $urlRouterProvider : angular.ui.IUrlRouterProvider) => {
        $stateProvider.state('shell', <angular.ui.IState>{
                url : '',
                controller: 'ShellController',
                controllerAs : 'vm',
                templateUrl : 'app/shell/shell.html',
                abstract: true
            })
            .state('shell.pomodoros', <angular.ui.IState>
            {
                url: '/pomodoros',
                controller : 'PomodorosController',
                controllerAs : 'vm',
                templateUrl : 'app/pomodoro/pomodoros.html'
            });

            $urlRouterProvider.otherwise('/pomodoros');
    });
}