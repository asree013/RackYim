import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserveComponent } from './reserve/reserve.component';



@NgModule({
  declarations: [
    ReserveComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReserveComponent
  ]
})
export class ReserveModule { }
