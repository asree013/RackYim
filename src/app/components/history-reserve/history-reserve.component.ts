import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Booking } from 'src/app/Base/models/booking';
import { LineService } from 'src/app/Base/service/line/line.service';
import { HistoyReserveService } from 'src/app/service/history_reserve/histoy-reserve.service';
import { PatientService } from 'src/app/service/patient/patient.service';
import { patients } from '../register/register-type';
import { booking } from './history_reserve_type';

@Component({
  selector: 'app-history-reserve',
  templateUrl: './history-reserve.component.html',
  styleUrls: ['./history-reserve.component.css']
})
export class HistoryReserveComponent implements OnInit {
  item: booking = new booking();
  listHistoyReserve: Booking[] = []
  constructor(private histoyReserveService: HistoyReserveService, private router: Router, private lineservice: LineService, private patientService: PatientService) { }

  ngOnInit(): void {
    this.lineservice.lineInit().subscribe((result) => {
      this.patientService.getPatientByLineliffId(result.userId).subscribe((result: any) => {
        if (result.data) {
          let patient = result.data as patients
          this.histoyReserveService.getlistreserveBypatientId(patient.id).subscribe((res) => {
            this.listHistoyReserve = res
            this.listHistoyReserve = this.listHistoyReserve.map((element) => {
              return { ...element, datebooking: element.bookingdetail.datebooking.split('T')[0] }
            })
          
          })
        } else {
          this.router.navigate(['menu'])
        }

      })

    })
  }

  delete(id: any, i: any) {
    console.log(id)
    if (window.confirm('ต้องการลบข้อมูล?')) {
      this.histoyReserveService.delete(id).subscribe((res) => {
        console.log(res)
        this.item.splice(i, 1);
      })
    }
  }
  gotomenu() {
    this.router.navigate(['menu'])
  }
}
