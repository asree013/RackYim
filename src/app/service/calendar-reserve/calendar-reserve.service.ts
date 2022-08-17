import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Day } from 'src/app/components/calendar-reserve/calendar.model';
import * as moment from 'moment-timezone'

@Injectable({
  providedIn: 'root'
})
export class CalendarReserveService {
  private currentYear: number;
  private currentMonthIndex: number;

  constructor() {
    let date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth();
  }

  public getCurrentMonth(): Day[] {
    return this.getMonth(this.currentMonthIndex, this.currentYear);
  }

  public getMonth(monthIndex: number, year: number): Day[] {
    let days = [];

    let firstday = this.createDay(1, monthIndex, year);

    //create empty days
    for (let i = 1; i < firstday.weekDayNumber; i++) {
      let newDay = new Day()
      newDay.weekDayNumber = i
      newDay.monthIndex = monthIndex
      newDay.year = year
      days.push(newDay);
    }
    console.log(firstday);

    days.push(firstday);
    //

    let countDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    for (let i = 2; i < countDaysInMonth + 1; i++) {
      days.push(this.createDay(i, monthIndex, year));
    }

    return days;
  }

  public getMonthName(monthIndex: number): string {
    switch (monthIndex) {
      case 1:
        return "กุมภาพันธ";
      case 2:
        return "มีนาคม";
      case 3:
        return "เมษายน";
      case 4:
        return "พฤษภาคม";
      case 5:
        return "มิถุนายน";
      case 6:
        return "กรกฎาคม";
      case 7:
        return "สิงหาคม";
      case 8:
        return "กันยายน";
      case 9:
        return "ตุลาคม";
      case 10:
        return "พฤศจิกายน";
      case 11:
        return "ธันวาคม";
      case 12:
        return "มกราคม";

      default:
        return "|" + monthIndex;
    }
  }

  public getWeekDayName(weekDay: number): string {
    switch (weekDay) {
      case 0:
        return "ส"; // Sunday
      case 1:
        return "จ"; // Monday
      case 2:
        return "อ"; // Tuesday
      case 3:
        return "พ"; // Wednesday
      case 4:
        return "พฤ"; // Thursday
      case 5:
        return "ศ"; // Friday
      case 6:
        return "ส"; // Saturday

      default:
        return "";
    }
  }

  private createDay(dayNumber: number, monthIndex: number, year: number) {
    let day = new Day();

    day.monthIndex = monthIndex;
    day.month = this.getMonthName(monthIndex);

    day.number = dayNumber;
    day.year = year;

    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay();
    day.weekDayName = this.getWeekDayName(day.weekDayNumber);

    return day;
  }
  public newFormatDate(date: Day): string {
    let newdate: string = `${date.year}-${(String(date.monthIndex + 1).length === 1 ? "0" + String(date.monthIndex + 1) : String(date.monthIndex + 1))}-${(String(date.number).length === 1) ? "0" + String(date.number) : String(date.number)}`;
    return newdate
  }
  validOnSelectDate(date: Day): Observable<boolean> {
    return new Observable((obs) => {
      let toDate = moment().add(1).tz('Asia/Bangkok').valueOf()
      let dateSelect = moment(this.newFormatDate(date)).tz('Asia/Bangkok').valueOf()
      console.log('toDate',toDate);
      console.log('dateSelect',dateSelect);
      
      obs.next((toDate < dateSelect )) 
    })
  }
}