/// <reference path="../node_modules/@types/angular-ui-router/index.d.ts" />
var app;
(function (app) {
    angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('shell', {
            url: '',
            controller: 'ShellController',
            controllerAs: 'vm',
            templateUrl: 'app/shell/shell.html',
            abstract: true
        })
            .state('shell.pomodoros', {
            url: '/pomodoros',
            controller: 'PomodorosController',
            controllerAs: 'vm',
            templateUrl: 'app/pomodoro/pomodoros.html'
        });
        $urlRouterProvider.otherwise('/pomodoros');
    });
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7QUFFNUUsSUFBVSxHQUFHLENBbUJaO0FBbkJELFdBQVUsR0FBRztJQUNULE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsY0FBMEMsRUFBRSxrQkFBa0Q7UUFDeEgsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQXFCO1lBQ3pDLEdBQUcsRUFBRyxFQUFFO1lBQ1IsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUcsSUFBSTtZQUNuQixXQUFXLEVBQUcsc0JBQXNCO1lBQ3BDLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7YUFDRCxLQUFLLENBQUMsaUJBQWlCLEVBQ3hCO1lBQ0ksR0FBRyxFQUFFLFlBQVk7WUFDakIsVUFBVSxFQUFHLHFCQUFxQjtZQUNsQyxZQUFZLEVBQUcsSUFBSTtZQUNuQixXQUFXLEVBQUcsNkJBQTZCO1NBQzlDLENBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsRUFuQlMsR0FBRyxLQUFILEdBQUcsUUFtQloiLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci11aS1yb3V0ZXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgYXBwIHsgXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKCgkc3RhdGVQcm92aWRlciA6IGFuZ3VsYXIudWkuSVN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciA6IGFuZ3VsYXIudWkuSVVybFJvdXRlclByb3ZpZGVyKSA9PiB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ3NoZWxsJywgPGFuZ3VsYXIudWkuSVN0YXRlPntcclxuICAgICAgICAgICAgICAgIHVybCA6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1NoZWxsQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyQXMgOiAndm0nLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmwgOiAnYXBwL3NoZWxsL3NoZWxsLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdzaGVsbC5wb21vZG9yb3MnLCA8YW5ndWxhci51aS5JU3RhdGU+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9wb21vZG9yb3MnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlciA6ICdQb21vZG9yb3NDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBcyA6ICd2bScsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybCA6ICdhcHAvcG9tb2Rvcm8vcG9tb2Rvcm9zLmh0bWwnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3BvbW9kb3JvcycpO1xyXG4gICAgfSk7XHJcbn0iXX0=
