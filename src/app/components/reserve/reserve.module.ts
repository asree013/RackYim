import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserveComponent } from './reserve/reserve.component';
import { FormsModule } from '@angular/forms';
import { ShereModule } from 'src/app/Base/share/shere.module';



@NgModule({
  declarations: [
    ReserveComponent
  ],
  imports: [
    CommonModule,FormsModule,ShereModule
  ],
  exports: [
    ReserveComponent
  ]
})
export class ReserveModule { }
