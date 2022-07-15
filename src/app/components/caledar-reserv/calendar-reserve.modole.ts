import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaledarReservComponent } from './caledar-reserv.component';
import { CalendarModule} from '@syncfusion/ej2-angular-calendars';




@NgModule({
  declarations: [
    CaledarReservComponent
  ],
  imports: [
    CommonModule,
    CalendarModule
  ],
  exports: [
    CaledarReservComponent
  ]
})
export class  CaledarReservModule { }