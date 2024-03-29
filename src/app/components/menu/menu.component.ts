import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  
  gotoReserve(){
    this.router.navigate([`/calendar-reserve`],{queryParams:{}})
  }

  gotoHistory(){
    this.router.navigate([`/history-reserve`])
  }

  gotoEditProfile(){
    this.router.navigate([`/edit-profile`])
  }

}
