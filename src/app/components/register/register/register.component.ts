import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { patients } from './../register-type';
import { RegisterService } from './../../../service/register/register.service';
import { LineLiffService } from 'src/app/service/line-liff/line-liff.service';
import { LineService } from 'src/app/Base/service/line/line.service';




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
    this.registerService.Register(this.item).subscribe((result: patients) => {
      console.log("สมัครสมาชิกเรียบร้อย", result);
    }, (err: Error) => {
      console.log(err);
    })
  }

}
