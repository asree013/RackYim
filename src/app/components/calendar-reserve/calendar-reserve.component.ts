import { Component, OnInit } from '@angular/core';
import { CalendarReserveService } from 'src/app/service/calendar-reserve/calendar-reserve.service';
import { Day } from 'src/app/components/calendar-reserve/calendar.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ReserveService } from 'src/app/service/reserve/reserve.service';
import { LineService } from 'src/app/Base/service/line/line.service';
import { PatientService } from 'src/app/service/patient/patient.service';
import { Booking } from 'src/app/Base/models/booking';



@Component({
  selector: 'app-calendar-reserve',
  templateUrl: './calendar-reserve.component.html',
  styleUrls: ['./calendar-reserve.component.css']
})


export class CalendarReserveComponent implements OnInit {
  booking: Booking = new Booking();
  isBooking:boolean
  onload:boolean = true
  public monthDays: Day[];
  public monthNumber: number;
  public year: number;
  public weekDaysName: string[] = [];
  constructor(
    public calendarReserveService: CalendarReserveService, private router: Router,
    private bookingService: ReserveService,
    private lineservice: LineService,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.onIntailData()
    this.setMonthDays(this.calendarReserveService.getCurrentMonth());
    this.weekDaysName.push("จ");
    this.weekDaysName.push("อ");
    this.weekDaysName.push("พ");
    this.weekDaysName.push("พฤ");
    this.weekDaysName.push("ศ");
    this.weekDaysName.push("ส");
    this.weekDaysName.push("อา");
  }

  onIntailData() {
    this.lineservice.lineInit().subscribe((result) => {

      this.patientService.getPatientByLineliffId(result.userId).subscribe((result: any) => {
        console.log(result);
        if (result.data) {
          this.bookingService.getrepoByPatientIdAndBookingStatusBookingByLineliff(result.data.id).subscribe((result:any)=>{
            if (result.data === null) {
              this.isBooking = false
              this.onload =  !this.onload 
            }else{
              let item = result;
              this.booking = item
              this.isBooking = true
              this.onload =  !this.onload 
            }
            console.log();
          })
        } else {
          this.router.navigate(['menu'])
        }

      })

    })
  }
  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.calendarReserveService.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth(): void {
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
    let monthIndex: number = (new Date().getMonth() + 2);
    console.log(monthIndex);
  }

  selectDay(day: Day) {
    this.calendarReserveService.validOnSelectDate(day).subscribe((result) => {
      if (result) {
        this.router.navigate([`/reserve`], {
          queryParams: {
            date: this.calendarReserveService.newFormatDate(day)
          }
        })
      } else {
        Swal.fire({
          title: 'การแจ้งเตือน',
          text: "โปรดเลือกวันที่ มากกว่า วันที่ ปัจจุบัน 1วัน ",
          icon: 'error',
          showConfirmButton: true
        });
      }
      // console.log(this.calendarReserveService.newFormatDate(day));
      // 
    })

  }
  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }
  gotomenu() {
    this.router.navigate(['menu'])
  }

  cancelReserve(){
    {
      Swal.fire({
        title: 'คุณแน่ใจที่จะยกเลิกจอง?',
        text: 'คุณสามารถเลือกวันที่จะจองได้',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ใช่, ฉันต้องการจอง',
        cancelButtonText: 'ไม่, ฉันยังไม่จอง',
      })
    }
  }
}
