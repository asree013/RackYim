import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReserveService } from 'src/app/service/reserve/reserve.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { booking } from '../../history-reserve/history_reserve_type';
import Swal from 'sweetalert2';
import { LineService } from 'src/app/Base/service/line/line.service';
import { Selecter } from 'src/app/Base/models/selecter';
import { Booking } from 'src/app/Base/models/booking';
import { PatientService } from 'src/app/service/patient/patient.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  onload:boolean = true
  item: Booking = new Booking();
  constructor(
    public FormBuilder: FormBuilder,
    private router: Router,
    private path: ActivatedRoute,
    private ngZone: NgZone,
    private reserveService: ReserveService,
    private lineservice:LineService,
    private patient:PatientService
  ) { }
  listtypeReserve: Selecter[] = []
  ngOnInit(): void {
    this.onInitData()
  }
  onInitData(){
    this.lineservice.lineInit().subscribe((result)=>{
      this.reserveService.getDorpdonwTypeooking(result.companyId).subscribe((result)=>{
        this.listtypeReserve = result;
        this.onload = !this.onload;
      })
      this.patient.getPatientByLineliffId(result.userId).subscribe((result:any)=>{
        console.log(result);
        if (result.data) {
          this.item.patient = result.data;
          this.item.patientId = result.data.id;
          this.item.datebooking = this.path.snapshot.queryParams['date']
        }else{
          this.router.navigate(['menu'])
        }
       
      })
      this.item.companyId = result.companyId;
    })
  }
  onSubmit(): Observable<boolean> {
    return new Observable((obs)=>{
      this.reserveService.Reserves(this.item)
      .subscribe(() => {
        console.log("ทำการจองสำเร็จ");
        obs.next(true)
      }, (err) => {
        console.log(err);
        obs.error(false)
      })
    })
    

  }
  ReserveSweetAlert() {
    {
      Swal.fire({
        title: 'คุณแน่ใจที่จะจอง?',
        text: 'คุณสามารถเลือกวันที่จะจองได้',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ใช่, ฉันต้องการจอง',
        cancelButtonText: 'ไม่, ฉันยังไม่จอง',
      }).then((result) => {
        if (result.value) {
          this.onload = !this.onload;
          this.onSubmit().subscribe(()=>{
            this.onload = !this.onload;
            Swal.fire({
              title: 'การเเจ้งเตือน?',
              text: 'คุณทำการจองสำเร็จ',
              icon: 'success',
              showConfirmButton:false,
              timer:3000
            }).then(()=>{
              this.router.navigate(['history-reserve']).then()
            });
          },(err)=>{
            Swal.fire({
              title: 'การเเจ้งเตือน?',
              text: 'คุณทำการจองไม่สำเร็จ',
              icon: 'error',
            })
          })
          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('ยกเลิก', '(คูณยังไม่ได้ทำการจอง)', 'error');
        }
      });
    }
  }
  getTypebooking(typebookingid:any){
    this.item.typebookingId  = typebookingid.target.value;
  }
}
