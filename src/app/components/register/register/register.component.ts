import { HttpClient } from '@angular/common/http';
import { Component, OnInit , NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup , FormBuilder } from '@angular/forms';
import { patients } from './../register-type';
import { RegisterService } from './../../../service/register/register.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  item:patients = new patients();
  
  constructor(
    public FormBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private registerService: RegisterService
    
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): any {

    console.log(this.item);
    
    this.registerService.Register(this.item)
    .subscribe(()=> {
      console.log("สมัครสมาชิกเรียบร้อย");
    }, (err) => {
      console.log(err);
    })
  }

}
