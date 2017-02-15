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
        this.title = "Hello World Dood This is pretty cool omg it refreshes so fast";
        this.init();
    }
    return PomodorosController;
}());
PomodorosController.$inject = ['$scope', 'pomodoroService'];
exports.PomodorosController = PomodorosController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbW9kb3JvL3BvbW9kb3Jvc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBO0lBSUksNkJBQW1CLE1BQXNCLEVBQVMsZUFBaUM7UUFBbkYsaUJBR0M7UUFIa0IsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFLbkYsU0FBSSxHQUFHO1lBQ0gsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxhQUFhO2dCQUM3QyxLQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7UUFSRyxJQUFJLENBQUMsS0FBSyxHQUFHLCtEQUErRCxDQUFDO1FBQzdFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBT0wsMEJBQUM7QUFBRCxDQWRBLEFBY0M7QUFYVSwyQkFBTyxHQUFrQixDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBSHJELGtEQUFtQiIsImZpbGUiOiJwb21vZG9yby9wb21vZG9yb3NDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9kdWxlIH0gZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IElQYWdlZFJlc3VsdCwgSVBvbW9kb3JvLCBJUG9tb2Rvcm9TZXJ2aWNlIH0gZnJvbSAnLi9wb21vZG9yb1NlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvbW9kb3Jvc0NvbnRyb2xsZXIge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHBvbW9kb3JvczogSVBvbW9kb3JvW107XHJcbiAgICBzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnJHNjb3BlJywgJ3BvbW9kb3JvU2VydmljZSddO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljICRzY29wZTogYW5ndWxhci5JU2NvcGUsIHB1YmxpYyBwb21vZG9yb1NlcnZpY2U6IElQb21vZG9yb1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJIZWxsbyBXb3JsZCBEb29kIFRoaXMgaXMgcHJldHR5IGNvb2wgb21nIGl0IHJlZnJlc2hlcyBzbyBmYXN0XCI7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnBvbW9kb3JvU2VydmljZS5nZXRBbGwoKS50aGVuKChwYWdlZFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9tb2Rvcm9zID0gcGFnZWRSZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59ICJdfQ==
