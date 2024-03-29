
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { patients } from './../register-type';
import { RegisterService } from './../../../service/register/register.service';
import { LineService } from 'src/app/Base/service/line/line.service';
import Swal from 'sweetalert2';
import { registerlineliffitemview } from 'src/app/Base/models/registerlineliffitemview';
import { profile } from 'src/app/Base/models/profile';
import { PatientService } from 'src/app/service/patient/patient.service';
import { v4 as uuidv4 } from 'uuid';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  onload: boolean = true
  item: patients = new patients();
  profile: profile = new profile()
  ItemView = new registerlineliffitemview()
  constructor(
    public FormBuilder: FormBuilder,
    private registerService: RegisterService,
    private lineservice: LineService,
    private router: Router,
    private patientService:PatientService

  ) { }

  async ngOnInit() {

    await this.onInitailData();
  }
  onInitailData() {
    this.lineservice.lineInit().subscribe((result) => {
      this.ItemView.profile = result;
      this.item.companyId = result.companyId
      this.item.id = uuidv4()
      this.getPatientByLiffId(result.userId)
    });

  }
  getPatientByLiffId(liffId:string){
    this.patientService.getPatientByLineliffId(liffId).subscribe((result:any)=>{
      if (result.data) {
        this.router.navigate(['menu'])
      }
      this.onload = !this.onload
    })
  }
  onSubmit(): any {
    if (this.item.idCard.length < 1) {
      Swal.fire({
        title: 'การแจ้งเตือน',
        text: "ไม่ได้ใส่เลขบัตรประชาชน",
        icon: 'error',
        showConfirmButton: true
      });
      return 0
    }
    if (this.item.firstName.length < 1) {
      Swal.fire({
        title: 'การแจ้งเตือน',
        text: "ไม่ได้ใส่ชื่อ",
        icon: 'error',
        showConfirmButton: true
      });

      return 0
    }
    if (this.item.lastName.length < 1) {
      Swal.fire({
        title: 'การแจ้งเตือน',
        text: "ไม่ได้ใส่นามสกุล",
        icon: 'error',
        showConfirmButton: true
      });

      return 0
    }
    if (this.item.phonenumber.length < 1) {
      Swal.fire({
        title: 'การแจ้งเตือน',
        text: "ไม่ได้ใส่เบอร์โทร",
        icon: 'error',
        showConfirmButton: true
      });


      return 0
    }
    if (this.item.email.length < 1) {
      Swal.fire({
        title: 'การแจ้งเตือน',
        text: "ไม่ได้ใส่อีเมล",
        icon: 'error',
        showConfirmButton: true
      });

      return 0
    }
    if (this.item.address.length < 1) {
      Swal.fire({
        title: 'การแจ้งเตือน',
        text: "ไม่ได้ใส่ที่อยู่",
        icon: 'error',
        showConfirmButton: true
      });

      return 0
    }
    if (this.item.gender.length < 1) {
      Swal.fire({
        title: 'การแจ้งเตือน',
        text: "ไม่ได้ระบุเพศ",
        icon: 'error',
        showConfirmButton: true
      });

      return 0
    }
    if (this.item.congenitaldisease.length < 1) {
      Swal.fire({
        title: 'การแจ้งเตือน',
        text: "ไม่ได้ใส่โรคประจำตัว, หากไม่มีให้ระบุว่า ไม่มี",
        icon: 'error',
        showConfirmButton: true
      });

      return 0
    }
    if (this.item.drugallergy.length < 1) {
      Swal.fire({
        title: 'การแจ้งเตือน',
        text: "ไม่ได้ระบุ, หากไม่มีให้ระบุว่า ไม่มี",
        icon: 'error',
        showConfirmButton: true
      });


      return 0
    }
    this.ItemView.patient = this.item;
    this.registerService.Register(this.ItemView).subscribe((result: registerlineliffitemview) => {
      Swal.fire({
        title: 'การแจ้งเตือน',
        text: "ลงทะเบียนสมาชิกเรียบร้อย",
        icon: 'success',
        showConfirmButton: true
      }).then(() => {
        this.router.navigate([`/menu`]);
      })
    }, (err: any) => {
      Swal.fire({
        title: 'การแจ้งเตือน',
        text: err.msg,
        icon: 'error',
        showConfirmButton: true
      })
    })

  }

  reComplet() {
    Swal.fire("สมัครสมาชิกเรียบร้อย");
  }
}


