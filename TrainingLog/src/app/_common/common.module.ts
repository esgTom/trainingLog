import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule  } from 'ngx-bootstrap/modal';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { YearSelectorComponent } from './year-selector/year-selector.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule
  ],
  declarations: [
    MonthSelectorComponent,
    YearSelectorComponent
  ],
  exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MonthSelectorComponent,
      YearSelectorComponent
  ]
})
export class AppCommonModule { }
