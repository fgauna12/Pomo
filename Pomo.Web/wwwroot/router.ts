import { app } from './app';
import 'angular-ui-router';

import { ShellController } from './shell/shell';
import { PomodorosController} from './pomodoro/pomodorosController';

export let configureRoutes = () => {
    app.config(($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
        $stateProvider.state('shell', <angular.ui.IState> {
                url: '',
                controller: 'ShellController',
                controllerAs: 'vm',
                templateUrl: 'shell/shell.html',
                abstract: true
            })
            .state('shell.pomodoros', <angular.ui.IState> {
                url: '/pomodoros',
                controller: PomodorosController,
                controllerAs: 'vm',
                templateUrl: 'pomodoro/pomodoros.html'
            });

        $urlRouterProvider.otherwise('/pomodoros');
    });
};