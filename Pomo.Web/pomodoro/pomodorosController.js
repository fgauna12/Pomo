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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbW9kb3JvL3BvbW9kb3Jvc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBVSxHQUFHLENBa0JaO0FBbEJELFdBQVUsR0FBRztJQUNUO1FBSUksNkJBQW1CLE1BQXNCLEVBQVMsZUFBcUM7WUFBdkYsaUJBR0M7WUFIa0IsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7WUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBc0I7WUFLdkYsU0FBSSxHQUFHO2dCQUNILEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsYUFBYTtvQkFDN0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQTtZQVJHLElBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFPTCwwQkFBQztJQUFELENBZEEsQUFjQztJQVhVLDJCQUFPLEdBQWtCLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFhbEUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUNqRixDQUFDLEVBbEJTLEdBQUcsS0FBSCxHQUFHLFFBa0JaIiwiZmlsZSI6InBvbW9kb3JvL3BvbW9kb3Jvc0NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubmFtZXNwYWNlIGFwcCB7XHJcbiAgICBjbGFzcyBQb21vZG9yb3NDb250cm9sbGVyIHtcclxuICAgICAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgICAgIHBvbW9kb3JvczogSVBvbW9kb3JvW107XHJcbiAgICAgICAgc3RhdGljICRpbmplY3Q6IEFycmF5PHN0cmluZz4gPSBbJyRzY29wZScsICdwb21vZG9yb1NlcnZpY2UnXTtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgJHNjb3BlOiBhbmd1bGFyLklTY29wZSwgcHVibGljIHBvbW9kb3JvU2VydmljZTogYXBwLklQb21vZG9yb1NlcnZpY2UpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IFwiSGVsbG8gV29ybGQgRG9vZFwiO1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9tb2Rvcm9TZXJ2aWNlLmdldEFsbCgpLnRoZW4oKHBhZ2VkUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9tb2Rvcm9zID0gcGFnZWRSZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdQb21vZG9yb3NDb250cm9sbGVyJywgUG9tb2Rvcm9zQ29udHJvbGxlcik7XHJcbn0iXX0=
