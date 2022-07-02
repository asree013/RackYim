import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelendarComponent } from './celendar/celendar.component';



@NgModule({
  declarations: [
    CelendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CelendarComponent
  ]
})
export class CelendarModule { }
