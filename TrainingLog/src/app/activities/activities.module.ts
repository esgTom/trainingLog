import { NgModule } from '@angular/core';

import { AppCommonModule } from '../_common/common.module';
import { ActivityCalendarComponent } from './activity-calendar/activity-calendar.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

@NgModule({
  imports: [
    AppCommonModule
  ],
  declarations: [
    ActivityCalendarComponent,
    ActivityDetailComponent
  ],
  exports: [
    ActivityCalendarComponent
  ],
  entryComponents: [
    ActivityDetailComponent
  ]
})
export class ActivitiesModule { }
