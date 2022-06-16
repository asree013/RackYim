import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ReserveService } from 'src/app/service/reserve/reserve.service';
import { FormGroup , FormBuilder } from '@angular/forms';
import { booking } from '../../history-reserve/history_reserve_type';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  
  item:booking = new booking();

  constructor(
    public FormBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private reserveService: ReserveService
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): any {

    console.log(this.item);
    
    this.reserveService.Reserves(this.item)
    .subscribe(()=> {
      console.log("ทำการจองสำเร็จ");
    }, (err) => {
      console.log(err);
    })
  }

}
