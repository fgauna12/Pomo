"use strict";
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
        this.init();
    }
    return PomodorosController;
}());
PomodorosController.$inject = ['$scope', 'pomodoroService'];
exports.PomodorosController = PomodorosController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbW9kb3JvL3BvbW9kb3Jvc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBO0lBR0ksNkJBQW1CLE1BQXNCLEVBQVMsZUFBaUM7UUFBbkYsaUJBRUM7UUFGa0IsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFJbkYsU0FBSSxHQUFHO1lBQ0gsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxhQUFhO2dCQUM3QyxLQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7UUFQRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQU9MLDBCQUFDO0FBQUQsQ0FaQSxBQVlDO0FBVlUsMkJBQU8sR0FBa0IsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUZyRCxrREFBbUIiLCJmaWxlIjoicG9tb2Rvcm8vcG9tb2Rvcm9zQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZHVsZSB9IGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBJUGFnZWRSZXN1bHQsIElQb21vZG9ybywgSVBvbW9kb3JvU2VydmljZSB9IGZyb20gJy4vcG9tb2Rvcm9TZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb21vZG9yb3NDb250cm9sbGVyIHtcclxuICAgIHBvbW9kb3JvczogSVBvbW9kb3JvW107XHJcbiAgICBzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnJHNjb3BlJywgJ3BvbW9kb3JvU2VydmljZSddO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljICRzY29wZTogYW5ndWxhci5JU2NvcGUsIHB1YmxpYyBwb21vZG9yb1NlcnZpY2U6IElQb21vZG9yb1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucG9tb2Rvcm9TZXJ2aWNlLmdldEFsbCgpLnRoZW4oKHBhZ2VkUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wb21vZG9yb3MgPSBwYWdlZFJlc3BvbnNlLnJlc3VsdHM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0gIl19
