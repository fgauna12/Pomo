var app;
(function (app) {
    var PomodorosController = (function () {
        function PomodorosController($scope, pomodoroService) {
            var _this = this;
            this.$scope = $scope;
            this.pomodoroService = pomodoroService;
            this.init = function () {
                _this.pomodoroService.getAll().then(function (pagedResponse) {
                    _this.pomodoros = pagedResponse.results;
                });
            };
            this.title = "Hello World Dood";
            this.init();
        }
        return PomodorosController;
    }());
    PomodorosController.$inject = ['$scope', 'pomodoroService'];
    angular.module('app').controller('PomodorosController', PomodorosController);
})(app || (app = {}));
//# sourceMappingURL=pomodorosController.js.map