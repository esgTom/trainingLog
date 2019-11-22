import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';

import { environment } from '../../environments/environment';
import { Activity } from '../_models/activity';
import { ActivitiesResponse } from '../_models/activitiesResponse';

@Injectable()
export class ActivityDataService {

    constructor( private http: HttpClient ) { }

    getActivity(activityId:  number): Observable<Activity[]> {

        let params = new HttpParams();
        params = params.set('activityId', activityId.toString());

        return this.http.get<Activity[]>(environment.Urls.trainingLogAPIActivities, { params: params });

    }

    getActivities(foreignKey:  number): Observable<Activity[]> {

        let params = new HttpParams();
        params = params.set('foreignKey', foreignKey.toString());

        return this.http.get<Activity[]>(environment.Urls.trainingLogAPIActivities, { params: params });

    }


    getActivityCalendar(eventId: number, searchYear: number, searchMonth: number): Observable<ActivitiesResponse> {

        let params = new HttpParams();
        params = params.set('id', eventId.toString());
        params = params.set('searchYear', searchYear.toString());
        params = params.set('searchMonth', searchMonth.toString());

        return this.http.get<ActivitiesResponse>(environment.Urls.trainingLogAPIActivities + 'GetActivitiesCalendar', { params: params });

    }

    

    saveActivity(activity: Activity):  Observable<Activity> {
        return this.http.post<Activity>(environment.Urls.trainingLogAPIActivities, activity);
    }

    deleteActivity(activityId:  number):  Observable<Activity> {
        let params = new HttpParams();
        params = params.set('activityId', activityId.toString());

        return this.http.delete<Activity>(environment.Urls.trainingLogAPIActivities, { params: params });

    }
}
