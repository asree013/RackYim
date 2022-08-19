import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryReserveComponent } from './history-reserve.component';
import { ShereModule } from 'src/app/Base/share/shere.module';




@NgModule({
  declarations: [
    HistoryReserveComponent
  ],
  imports: [
    CommonModule,
    ShereModule
  ],
  exports: [
    HistoryReserveComponent
  ]
})
export class HistoryReserveModule { }
