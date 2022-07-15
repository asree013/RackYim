import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caledar-reserv',
  templateUrl: './caledar-reserv.component.html',
  styleUrls: ['./caledar-reserv.component.css']
})
export class CaledarReservComponent {
  title = 'myangularproject';
  public dateValue: Date = new Date(2022, 4, 20);
  public minDate: Date = new Date(2022, 4, 10);
  public maxDate: Date = new Date(2022, 4, 25);
}