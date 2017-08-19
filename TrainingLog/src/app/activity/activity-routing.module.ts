import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ActivityListComponent} from './activity-list/activity-list.component';
import {ActivityDetailComponent} from './activity-detail/activity-detail.component';


const routes: Routes = [
  { path: '', component: ActivityListComponent},
  { path: 'activity-detail', component: ActivityDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
