import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { environment } from '../../environments/environment';
import { Event } from '../_models/event';

@Injectable()
export class EventDataService {

    constructor( private http: HttpClient ) { }

    getEvent(eventId:  number): Observable<Event[]> {

        let params = new HttpParams();
        params = params.set('eventId', eventId.toString());

        return this.http.get<Event[]>(environment.Urls.trainingLogAPIEvents, { params: params });

    }

    getEvents(foreignKey:  number): Observable<Event[]> {

        let params = new HttpParams();
        params = params.set('foreignKeyId', foreignKey.toString());

        return this.http.get<Event[]>(environment.Urls.trainingLogAPIEvents + 'GetEvents', { params: params });

    }

    getEventGraph(eventId:  number): Observable<Event> {

        let params = new HttpParams();
        params = params.set('eventId', eventId.toString());

        return this.http.get<Event>(environment.Urls.trainingLogAPIEvents + 'GetEventGraph', { params: params });

    }

    saveEvent(event: Event):  Observable<Event> {
        return this.http.post<Event>(environment.Urls.trainingLogAPIEvents, event);
    }

    deleteEvent(eventId:  number):  Observable<Event> {
        let params = new HttpParams();
        params = params.set('eventId', eventId.toString());

        return this.http.delete<Event>(environment.Urls.trainingLogAPIEvents, { params: params });

    }
}

