import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinerComponent } from './spiner/spiner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinerComponent],
  exports:[SpinerComponent]
})
export class ShereModule { }
