//Dependencies 
import {module} from 'angular';
import 'angular-ui-router';

//App Dependencies
export let app = module("app", ['ui.router']);

//Bootstrap the app
import {PomodorosController} from './pomodoro/pomodorosController';
import {PomodoroService} from './pomodoro/pomodoroService';
import {ShellController} from './shell/shell';

app.controller('PomodorosController', PomodorosController);
app.controller('ShellController', ShellController);
app.service('pomodoroService', PomodoroService);

//Configure the Routes
import { configureRoutes } from './router';
configureRoutes();