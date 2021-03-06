"use strict";
var PomodoroService = (function () {
    function PomodoroService($http) {
        this.$http = $http;
    }
    PomodoroService.prototype.getAll = function () {
        return this.$http.get('/api/pomodoros').then(function (result) { return result.data; });
    };
    return PomodoroService;
}());
PomodoroService.$inject = ['$http'];
exports.PomodoroService = PomodoroService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbW9kb3JvL3BvbW9kb3JvU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUE7SUFHSSx5QkFBbUIsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztJQUN0QyxDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBMEIsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsSUFBSSxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFDTCxzQkFBQztBQUFELENBVEEsQUFTQztBQVJVLHVCQUFPLEdBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFEakMsMENBQWUiLCJmaWxlIjoicG9tb2Rvcm8vcG9tb2Rvcm9TZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUHJvbWlzZSwgSUh0dHBTZXJ2aWNlfSBmcm9tICdhbmd1bGFyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBvbW9kb3JvU2VydmljZSB7XHJcbiAgICBnZXRBbGwoKTogSVByb21pc2U8SVBhZ2VkUmVzdWx0PElQb21vZG9ybz4+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9tb2Rvcm9TZXJ2aWNlIGltcGxlbWVudHMgSVBvbW9kb3JvU2VydmljZXtcclxuICAgIHN0YXRpYyAkaW5qZWN0OiBBcnJheTxzdHJpbmc+ID0gWyckaHR0cCddO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgJGh0dHA6IElIdHRwU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGwoKTogSVByb21pc2U8SVBhZ2VkUmVzdWx0PElQb21vZG9ybz4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQ8SVBhZ2VkUmVzdWx0PElQb21vZG9ybz4+KCcvYXBpL3BvbW9kb3JvcycpLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LmRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYWdlZFJlc3VsdDxUPiB7XHJcbiAgICByZXN1bHRzOiBUW107XHJcbiAgICB0b3RhbDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQb21vZG9ybyB7XHJcbiAgICBpZCA6IHN0cmluZztcclxuICAgIGNyZWF0ZWRPbjogRGF0ZTtcclxuICAgIGNvbXBsZXRlZE9uOiBEYXRlO1xyXG4gICAgZHVyYXRpb24gOiBUaW1lUmFuZ2VzO1xyXG4gICAgY29tcGxldGVkIDogYm9vbGVhbjtcclxufVxyXG5cclxuIl19
