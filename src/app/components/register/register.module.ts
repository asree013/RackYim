import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ShereModule } from 'src/app/Base/share/shere.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
 
  CommonModule,
    FormsModule,
    ShereModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
