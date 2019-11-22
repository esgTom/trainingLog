import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'training-log-year-selector',
  templateUrl: './year-selector.component.html',
  styleUrls: ['./year-selector.component.css']
})
export class YearSelectorComponent implements OnInit {

    @Input() selectorType: string;
    @Input() raiseEvents: boolean;
    @Input() initialYear: number;
    @Output() yearChanged: EventEmitter<number> = new EventEmitter();

    currentYear: number;
    calendarYears = [2019, 2018, 2017] ;
    calendarYearModel: any = { yr2019: false, yr2018: true, yr2017: false };

    constructor() { }

    ngOnInit() {

        if ( this.initialYear > 0) {
            this.currentYear = this.initialYear; // Sets default year
        }

    }

    onYearChange() {
        if ( this.raiseEvents) {
            this.yearChanged.emit(this.currentYear);
        }
    }

    onHidden(): void {
        console.log('Dropdown is hidden');
      }
    onShown(): void {
       console.log('Dropdown is shown');
    }
      isOpenChange(): void {
        console.log('Dropdown state is changed');
      }

}
