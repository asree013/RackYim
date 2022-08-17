import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';



@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EditProfileComponent
  ]
})
export class EditProfileModule { }
