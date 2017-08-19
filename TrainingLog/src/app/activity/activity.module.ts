import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityDataService } from './activity-data.service';

@NgModule({
  imports: [
    CommonModule,
    ActivityRoutingModule
  ],
  declarations: [ActivityListComponent, ActivityDetailComponent],
  providers: [ ActivityDataService ]
})
export class ActivityModule { }
