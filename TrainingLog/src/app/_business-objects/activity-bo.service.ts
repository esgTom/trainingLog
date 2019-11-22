import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable  } from 'rxjs/Observable';

import { Activity } from '../_models/activity';
import { ActivityDataService } from '../services/activity-data.service';
import { ErrorService } from '../_core/error-service.service';
import { BusinessObjectEvent } from './models/business-object-event';
import { ActivityCalendar } from '../_models/activity-calendar';
import { ActivitiesResponse } from '../_models/activitiesResponse';

@Injectable() export class ActivityBO {

constructor(
    private _dataService: ActivityDataService,
    private _errorService: ErrorService
) { }

    // #region Events
    metadataEvent: EventEmitter<BusinessObjectEvent> = new EventEmitter();

    //  #endregion

    // #region Properties

    private _valid = true;
    private _busy = false;
    private _model = null;
    private _Activitys: Activity[] = null;
    private _ActivitiesCalendar: ActivityCalendar[] = null;
    private _ActivitiesCalendarYear: number = null;
    private _ActivitiesCalendarMonth = 0;

    // #endregion

    // #region Getters / Setters

    get isValid() {
        return this._valid;
    }

    get busy() {
        return this._busy;
    }

    get Activity() {
        return this.Activity;
    }
    set selectedActivity(activity: Activity) {
        this._model = Activity;
    }
    get selectedactivity(): Activity {
        return this._model;
    }
    get activitiesCalendar(): ActivityCalendar[] {
        return this._ActivitiesCalendar;
    }
    set activitiesCalendarYear( calendarYear: number) {
        this._ActivitiesCalendarYear = calendarYear;
    }
    get activitiesCalendarYear(): number {
        return this._ActivitiesCalendarYear;
    }
    set activitiesCalendarMonth( calendarMonth: number) {
        this._ActivitiesCalendarMonth = calendarMonth;
    }
    get activitiesCalendarMonth(): number {

        if ( this._ActivitiesCalendarMonth === null || this._ActivitiesCalendarMonth === 0) {
            const currentDate = new Date();
            this._ActivitiesCalendarMonth = currentDate.getMonth();
        } 
        return this._ActivitiesCalendarMonth;
    }
    // #endregion

    loadActivity(activityId: number): Observable<Activity[]> {

        if (this._model !== null && this._model.ActivityId === activityId) {
            return Observable.create(this._model);
        } else {
            return this._dataService.getActivity(activityId)
            .do (data => {
                    this.selectedActivity =  data[0];
                }, error => {
                    this.emitEvent('load activity', 'error', error);
                    this._busy = false;
                });
        }
    }

    loadActivities(foreignKey: number): Observable<Activity[]> {

        return this._dataService.getActivity(foreignKey)
            .do (data => {
                this._Activitys = data;
            }, error => {
                this.emitEvent('load activities', 'error', error);
                this._busy = false;
            });
    }

    loadActivitiesCalendar(eventId: number, searchYear: number, searchMonth: number): Observable<ActivitiesResponse> {

        return this._dataService.getActivityCalendar(eventId, searchYear, searchMonth)
            .do((data: ActivitiesResponse ) => {
                this._ActivitiesCalendar = data.CalendarDays;
            }, error => {
                this.emitEvent('load activities calendar', 'error', error);
                this._busy = false;
            });
    }


    saveActivity() {

        this._busy = true;

        this._dataService.saveActivity(this._model)
            .subscribe((data: Activity) => {
                this.selectedActivity = data[0];
                this.emitEvent('Activity save', 'success');
                this._busy = false;
            }, error => {
                this.emitEvent('Activity save', 'error', error);
                this._busy = false;
            });
    }

    deleteActivity(selectedActivity: Activity) {

        this._busy = true;

        this._dataService.deleteActivity(this._model.ActivityId)
            .subscribe((data: Activity) => {
                this._model = null;
                this.emitEvent('Activity delete', 'success');
                this._busy = false;
            }, error => {
                this.emitEvent('Activity delete', 'error', error);
                this._busy = false;
            });
    }

    emitEvent(operation: string, status: any, payload: any = null) {
        this.metadataEvent.emit(new BusinessObjectEvent(operation, status, payload));
    }

}

