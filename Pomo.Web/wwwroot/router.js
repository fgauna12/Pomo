/// <reference path="../node_modules/@types/angular-ui-router/index.d.ts" />
var app;
(function (app) {
    angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('shell', {
            url: '',
            controller: 'ShellController',
            controllerAs: 'vm',
            templateUrl: 'shell/shell.html',
            abstract: true
        })
            .state('shell.pomodoros', {
            url: '/pomodoros',
            controller: 'PomodorosController',
            controllerAs: 'vm',
            templateUrl: 'pomodoro/pomodoros.html'
        });
        $urlRouterProvider.otherwise('/pomodoros');
    });
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7QUFFNUUsSUFBVSxHQUFHLENBbUJaO0FBbkJELFdBQVUsR0FBRztJQUNULE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsY0FBMEMsRUFBRSxrQkFBa0Q7UUFDeEgsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQXFCO1lBQ3pDLEdBQUcsRUFBRyxFQUFFO1lBQ1IsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUcsSUFBSTtZQUNuQixXQUFXLEVBQUcsa0JBQWtCO1lBQ2hDLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7YUFDRCxLQUFLLENBQUMsaUJBQWlCLEVBQ3hCO1lBQ0ksR0FBRyxFQUFFLFlBQVk7WUFDakIsVUFBVSxFQUFHLHFCQUFxQjtZQUNsQyxZQUFZLEVBQUcsSUFBSTtZQUNuQixXQUFXLEVBQUcseUJBQXlCO1NBQzFDLENBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsRUFuQlMsR0FBRyxLQUFILEdBQUcsUUFtQloiLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci11aS1yb3V0ZXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgYXBwIHsgXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKCgkc3RhdGVQcm92aWRlciA6IGFuZ3VsYXIudWkuSVN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciA6IGFuZ3VsYXIudWkuSVVybFJvdXRlclByb3ZpZGVyKSA9PiB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ3NoZWxsJywgPGFuZ3VsYXIudWkuSVN0YXRlPntcclxuICAgICAgICAgICAgICAgIHVybCA6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NoZWxsQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyQXMgOiAndm0nLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmwgOiAnc2hlbGwvc2hlbGwuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ3NoZWxsLnBvbW9kb3JvcycsIDxhbmd1bGFyLnVpLklTdGF0ZT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BvbW9kb3JvcycsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyIDogJ1BvbW9kb3Jvc0NvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzIDogJ3ZtJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsIDogJ3BvbW9kb3JvL3BvbW9kb3Jvcy5odG1sJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9wb21vZG9yb3MnKTtcclxuICAgIH0pO1xyXG59Il19
