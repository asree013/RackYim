import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HistoyReserveService } from 'src/app/service/history_reserve/histoy-reserve.service';
import {  booking } from './history_reserve_type';

@Component({
  selector: 'app-history-reserve',
  templateUrl: './history-reserve.component.html',
  styleUrls: ['./history-reserve.component.css']
})
export class HistoryReserveComponent implements OnInit {
  item:booking = new booking();

  constructor(private histoyReserveService: HistoyReserveService,private router:Router) { }

  ngOnInit(): void {
    this.histoyReserveService.GetOnereserve(this.item).subscribe(res =>{
      console.log(res)
      this.item = res;
    })
  }

  delete(id:any,i:any) {
    console.log(id)
    if (window.confirm('ต้องการลบข้อมูล?')) {
      this.histoyReserveService.delete(id).subscribe((res)=>{
        console.log(res)
        this.item.splice(i,1);
      })
    }
  }
  gotomenu(){
    this.router.navigate(['menu'])
  }
}
