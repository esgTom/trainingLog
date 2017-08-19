import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecentActivity } from './models/recent-activity';

@Injectable()
export class ActivityDataService {

  recentActivity: RecentActivity[] = [];

  constructor(private http: HttpClient) { }

  getRecentActivity(): void {
    
    this.http.get<RecentActivity>('api/recentactivity')
      .subscribe( data => {
        this.recentActivity = data['results'];
      });

  }
}
