"use strict";
var app_1 = require("./app");
require("angular-ui-router");
var pomodorosController_1 = require("./pomodoro/pomodorosController");
exports.configureRoutes = function () {
    app_1.app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('shell', {
            url: '',
            controller: 'ShellController',
            controllerAs: 'vm',
            templateUrl: 'shell/shell.html',
            abstract: true
        })
            .state('shell.pomodoros', {
            url: '/pomodoros',
            controller: pomodorosController_1.PomodorosController,
            controllerAs: 'vm',
            templateUrl: 'pomodoro/pomodoros.html'
        });
        $urlRouterProvider.otherwise('/pomodoros');
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkJBQTRCO0FBQzVCLDZCQUEyQjtBQUczQixzRUFBb0U7QUFFekQsUUFBQSxlQUFlLEdBQUc7SUFDekIsU0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFDLGNBQXlDLEVBQUUsa0JBQWlEO1FBQ3BHLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFzQjtZQUMxQyxHQUFHLEVBQUUsRUFBRTtZQUNQLFVBQVUsRUFBRSxpQkFBaUI7WUFDN0IsWUFBWSxFQUFFLElBQUk7WUFDbEIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDO2FBQ0QsS0FBSyxDQUFDLGlCQUFpQixFQUFzQjtZQUMxQyxHQUFHLEVBQUUsWUFBWTtZQUNqQixVQUFVLEVBQUUseUNBQW1CO1lBQy9CLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQyxDQUFDO1FBRVAsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDIiwiZmlsZSI6InJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcCB9IGZyb20gJy4vYXBwJztcclxuaW1wb3J0ICdhbmd1bGFyLXVpLXJvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBTaGVsbENvbnRyb2xsZXIgfSBmcm9tICcuL3NoZWxsL3NoZWxsJztcclxuaW1wb3J0IHsgUG9tb2Rvcm9zQ29udHJvbGxlcn0gZnJvbSAnLi9wb21vZG9yby9wb21vZG9yb3NDb250cm9sbGVyJztcclxuXHJcbmV4cG9ydCBsZXQgY29uZmlndXJlUm91dGVzID0gKCkgPT4ge1xyXG4gICAgYXBwLmNvbmZpZygoJHN0YXRlUHJvdmlkZXI6IGFuZ3VsYXIudWkuSVN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcjogYW5ndWxhci51aS5JVXJsUm91dGVyUHJvdmlkZXIpID0+IHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnc2hlbGwnLCA8YW5ndWxhci51aS5JU3RhdGU+IHtcclxuICAgICAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnU2hlbGxDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2hlbGwvc2hlbGwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ3NoZWxsLnBvbW9kb3JvcycsIDxhbmd1bGFyLnVpLklTdGF0ZT4ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BvbW9kb3JvcycsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBQb21vZG9yb3NDb250cm9sbGVyLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwb21vZG9yby9wb21vZG9yb3MuaHRtbCdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9wb21vZG9yb3MnKTtcclxuICAgIH0pO1xyXG59OyJdfQ==
