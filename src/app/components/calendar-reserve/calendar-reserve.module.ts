import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarReserveComponent } from './calendar-reserve.component';
import { ShereModule } from 'src/app/Base/share/shere.module';



@NgModule({
  declarations: [
    CalendarReserveComponent
  ],
  imports: [
    CommonModule,
    ShereModule
  ],
  exports: [
    CalendarReserveComponent
  ]
})
export class CalendarReserveModule { }
