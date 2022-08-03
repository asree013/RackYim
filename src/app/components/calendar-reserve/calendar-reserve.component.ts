import { Component, OnInit } from '@angular/core';
import { CalendarReserveService } from 'src/app/service/calendar-reserve/calendar-reserve.service';
import { Day } from 'src/app/components/calendar-reserve/calendar.model';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-calendar-reserve',
  templateUrl: './calendar-reserve.component.html',
  styleUrls: ['./calendar-reserve.component.css']
})


export class CalendarReserveComponent implements OnInit {
  
  public monthDays: Day[];

  public monthNumber: number;
  public year: number;

  public weekDaysName: string[] = [];

  constructor(public calendarReserveService: CalendarReserveService) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendarReserveService.getCurrentMonth());

    this.weekDaysName.push("จ");
    this.weekDaysName.push("อ");
    this.weekDaysName.push("พ");
    this.weekDaysName.push("พฤ");
    this.weekDaysName.push("ศ");
    this.weekDaysName.push("ส");
    this.weekDaysName.push("อา");
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.calendarReserveService.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth() : void{
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.calendarReserveService.getMonth(this.monthNumber, this.year));
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }
}
