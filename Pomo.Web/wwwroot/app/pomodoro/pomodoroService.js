var app;
(function (app) {
    "use strict";
    var PomodoroService = (function () {
        function PomodoroService($http) {
            this.$http = $http;
            var frank2 = 'frank';
        }
        PomodoroService.prototype.getAll = function () {
            return this.$http.get('/api/pomodoros').then(function (result) { return result.data; });
        };
        return PomodoroService;
    }());
    PomodoroService.$inject = ['$http'];
    app.PomodoroService = PomodoroService;
    angular.module("app").service('pomodoroService', PomodoroService);
})(app || (app = {}));
//# sourceMappingURL=pomodoroService.js.map