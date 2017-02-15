import { module } from 'angular';
import { IPagedResult, IPomodoro, IPomodoroService } from './pomodoroService';

export class PomodorosController {
    title: string;
    pomodoros: IPomodoro[];
    static $inject: Array<string> = ['$scope', 'pomodoroService'];
    constructor(public $scope: angular.IScope, public pomodoroService: IPomodoroService) {
        this.title = "Hello World Dood This is pretty cool omg it refreshes so fast";
        this.init();
    }

    init = () => {
        this.pomodoroService.getAll().then((pagedResponse) => {
            this.pomodoros = pagedResponse.results;
        });
    }
} 