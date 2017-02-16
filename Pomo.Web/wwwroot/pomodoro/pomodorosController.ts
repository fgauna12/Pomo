import { module } from 'angular';
import { IPagedResult, IPomodoro, IPomodoroService } from './pomodoroService';

export class PomodorosController {
    pomodoros: IPomodoro[];
    static $inject: Array<string> = ['$scope', 'pomodoroService'];
    constructor(public $scope: angular.IScope, public pomodoroService: IPomodoroService) {
        this.init();
    }

    init = () => {
        this.pomodoroService.getAll().then((pagedResponse) => {
            this.pomodoros = pagedResponse.results;
        });
    }
} 