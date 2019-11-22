import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'training-log-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.css']
})
export class MonthSelectorComponent implements OnInit {

    @Input() raiseEvents: boolean;
    @Input() initialMonth: number;
    @Output() monthChanged: EventEmitter<any> = new EventEmitter();

    currentMonth: number;

    calendarMonths =
        [
            { monthNumber: 1, monthName: 'January' },
            { monthNumber: 2, monthName: 'February' },
            { monthNumber: 3, monthName: 'March' },
            { monthNumber: 4, monthName: 'April' },
            { monthNumber: 5, monthName: 'May' },
            { monthNumber: 6, monthName: 'June' },
            { monthNumber: 7, monthName: 'July' },
            { monthNumber: 8, monthName: 'August' },
            { monthNumber: 9, monthName: 'September' },
            { monthNumber: 10, monthName: 'October' },
            { monthNumber: 11, monthName: 'November' },
            { monthNumber: 12, monthName: 'December' }
        ] ;

    constructor() { }

    ngOnInit() {

        if ( this.initialMonth > 0) {
            this.currentMonth = this.initialMonth; // Sets default month
        }

        this.monthChanged.emit(this.getSelectedMonth()); // Send initial month to parent
    }

    onMonthChange() {

        if ( this.raiseEvents) {
            this.monthChanged.emit(this.getSelectedMonth());
        }
    }

    private getSelectedMonth() {
        return this.calendarMonths[this.currentMonth - 1];
    }

}
