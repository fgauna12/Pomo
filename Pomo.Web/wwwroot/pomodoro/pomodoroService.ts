
namespace app {
    "use strict";

    export interface IPomodoroService {
        getAll(): angular.IPromise<IPagedResult<IPomodoro>>;
    }

    export class PomodoroService implements IPomodoroService{
        static $inject: Array<string> = ['$http'];
        
        constructor(public $http: angular.IHttpService) {
        }

        public getAll(): angular.IPromise<IPagedResult<IPomodoro>> {
            return this.$http.get('/api/pomodoros').then((result: { data: any }) => <IPagedResult<IPomodoro>>result.data);
        }
    }

    export interface IPagedResult<T> {
        results: T[];
        total: number;
    }

    export interface IPomodoro {
        id : string;
        createdOn: Date;
        completedOn: Date;
        duration : TimeRanges;
        completed : boolean;
    }

    angular.module("app").service('pomodoroService', PomodoroService);
}

