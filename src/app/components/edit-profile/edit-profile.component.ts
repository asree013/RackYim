import { Component, OnInit } from '@angular/core';
import { LineService } from 'src/app/Base/service/line/line.service';
import Swal from 'sweetalert2';
import { registerlineliffitemview } from 'src/app/Base/models/registerlineliffitemview';
import { profile } from 'src/app/Base/models/profile';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { patients } from '../register/register-type';
import { EditProfileService } from 'src/app/service/edit-profile/edit-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  onload: boolean = true
  item: patients = new patients();
  profile: profile = new profile()
  ItemView = new registerlineliffitemview()
  constructor( public FormBuilder: FormBuilder,
    private editProfileService: EditProfileService,
    private lineservice: LineService,
    private router: Router
) { }

  async ngOnInit(){
    await this.onTnitailData();
  }
  onTnitailData(){
    this.lineservice.lineInit().subscribe((result) => {
      this.ItemView.profile = result;
      this.item.companyId = result.companyId
      this.onload = !this.onload
    });
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
    this.editProfileService.EditerProfile(this.ItemView).subscribe((result: registerlineliffitemview) => {
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
