import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ReserveService } from 'src/app/service/reserve/reserve.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { booking } from '../../history-reserve/history_reserve_type';
import Swal from 'sweetalert2';
import { LineService } from 'src/app/Base/service/line/line.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  item: booking = new booking();

  constructor(
    public FormBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private reserveService: ReserveService,
    private lineservice:LineService
  ) { }
  listtypeReserve: any
  ngOnInit(): void {

  }
  onInitData(){
    this.lineservice.lineInit().subscribe((result)=>{
      this.reserveService.getDorpdonwTypeooking(result.companyId).subscribe((result)=>{
        this.listtypeReserve = result
      })
    })
   
  }
  onSubmit(): any {

    console.log(this.item);

    this.reserveService.Reserves(this.item)
      .subscribe(() => {
        console.log("ทำการจองสำเร็จ");
      }, (err) => {
        console.log(err);
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
          Swal.fire(
            'ทำการจอง!',
            'คุณได้จองคิวเป็นที่เรียบร้อย.',
            'success'
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('ยกเลิก', '(คูณยังไม่ได้ทำการจอง)', 'error');
        }
      });
    }
  }

}
