import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import { FormsModule } from '@angular/forms';
import { ShereModule } from 'src/app/Base/share/shere.module';



@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShereModule
  ],
  exports:[
    EditProfileComponent
  ]
})
export class EditProfileModule { }
