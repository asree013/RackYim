import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { patients } from './../register-type';
import { RegisterService } from './../../../service/register/register.service';
import { LineLiffService } from 'src/app/service/line-liff/line-liff.service';
import { LineService } from 'src/app/Base/service/line/line.service';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  item: patients = new patients();


  constructor(
    public FormBuilder: FormBuilder,
    private registerService: RegisterService,
    private lineservice: LineService
  ) { }

  async ngOnInit() {
    await this.lineservice.lineInit();
    await this.onInitailData();
  }
  onInitailData() {
    let profile = this.lineservice.getProfile();
    if (profile) {
      this.item.lineliffId = profile.userId;
      this.item.companyId = profile.companyId;
      console.log(profile);
      
    }
  }
  onSubmit(): any {
    if(this.item.idCard.length < 1){
      Swal.fire("ไม่ได้ใส่บัตรประชาชน");
      return 0
    }
    if(this.item.firstName.length < 1){
      Swal.fire("ไม่ได้ใส่ชื่อ");
      return 0
    }
    if(this.item.lastName.length < 1){
      Swal.fire("ไม่ได้ใส่นามสกุล");
      return 0
    }
    if(this.item.phonenumber.length < 1){
      Swal.fire("ไม่ได้ใส่เบอร์โทร");
      return 0
    }
    if(this.item.email.length < 1){
      Swal.fire("ไม่ได้ใส่อีเมล");
      return 0
    }
    if(this.item.address.length < 1){
      Swal.fire("ไม่ได้ใส่ที่อยู่");
      return 0
    }
    if(this.item.gender.length < 1){
      Swal.fire("ไม่ได้ใส่ระบุเพศ");
      return 0
    }
    if(this.item.congenitaldisease.length < 1){
      Swal.fire("ไม่ได้ใส่โรคประจำตัว, หากไม่มีให้ระบุว่า 'ไม่มี'");
      return 0
    }
    if(this.item.drugallergy.length < 1){
      Swal.fire("ไม่ได้ระบุ, หากไม่มีให้ระบุว่า 'ไม่มี'");
      return 0
    }
    this.registerService.Register(this.item).subscribe((result: patients) => {
      console.log("สมัครสมาชิกเรียบร้อย", result);
    }, (err: Error) => {
      console.log(err);
    },)
  }
}


