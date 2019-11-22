
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/ToPromise';

import { environment } from '../../../environments/environment';
import { ActivityBO } from '../../_business-objects/activity-bo.service';
import { Activity } from '../../_models/activity';
import { ActivitiesResponse } from '../../_models/activitiesResponse';

@Injectable()
export class ActivityResolver implements Resolve<ActivitiesResponse> {

constructor( private _activityBO: ActivityBO ) {}

resolve( route: ActivatedRouteSnapshot ): Observable <ActivitiesResponse> {

    const currentDate = new Date();
    let searchYear = +route.queryParamMap.get('yr') || 0;
    let searchMonth = +route.queryParamMap.get('mo') || 0;

    if (searchYear === 0) {
        searchYear = currentDate.getFullYear();
    }
    if (searchMonth === 0) {
        searchMonth = currentDate.getMonth() + 1;
    }
    return this._activityBO.loadActivitiesCalendar(0, searchYear , searchMonth);

    }
}
