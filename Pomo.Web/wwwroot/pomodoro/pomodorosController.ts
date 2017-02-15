
namespace app {
    class PomodorosController {
        title: string;
        pomodoros: IPomodoro[];
        static $inject: Array<string> = ['$scope', 'pomodoroService'];
        constructor(public $scope: angular.IScope, public pomodoroService: app.IPomodoroService) {
            this.title = "Hello World Dood";
            this.init();
        }

        init = () => {
            this.pomodoroService.getAll().then((pagedResponse) => {
                this.pomodoros = pagedResponse.results;
            });
        }
    } 

    angular.module('app').controller('PomodorosController', PomodorosController);
}