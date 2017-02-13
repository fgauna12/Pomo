var app;
(function (app) {
    "use strict";
    var ShellController = (function () {
        function ShellController($scope, pomodoroService) {
            var _this = this;
            this.$scope = $scope;
            this.pomodoroService = pomodoroService;
            this.init = function () {
                _this.pomodoroService.getAll().then(function (pagedResponse) {
                    _this.pomodoros = pagedResponse.results;
                });
            };
            this.title = "Hello World";
            this.init();
        }
        return ShellController;
    }());
    ShellController.$inject = ['$scope', 'pomodoroService'];
    angular.module("app").controller('ShellController', ShellController);
})(app || (app = {}));
//# sourceMappingURL=shell.js.map