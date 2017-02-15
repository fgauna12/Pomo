import {IPromise, IHttpService} from 'angular';

export interface IPomodoroService {
    getAll(): IPromise<IPagedResult<IPomodoro>>;
}

export class PomodoroService implements IPomodoroService{
    static $inject: Array<string> = ['$http'];
    
    constructor(public $http: IHttpService) {
    }

    public getAll(): IPromise<IPagedResult<IPomodoro>> {
        return this.$http.get<IPagedResult<IPomodoro>>('/api/pomodoros').then((result) => result.data);
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

