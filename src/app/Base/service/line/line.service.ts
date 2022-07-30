import { Injectable } from '@angular/core';
import { secretkey } from '../../constant/cons';
import { profile } from '../../models/profile';
import { CompanyService } from '../company/company.service';
declare var liff: any
@Injectable({
  providedIn: 'root'
})
export class LineService {
  private profileUsers: profile = new profile();
  constructor(private company: CompanyService) { }
  lineInit() {
    liff.ready.then(() => {
      this.company.getLiffId(secretkey).subscribe((result) => {
        liff.init({ liffId: result.lineliffId }).then(async () => {
          if (liff.isLoggedIn()) {
            this.profileUsers = await liff.getProfile()
            this.profileUsers.companyId = result.companyId;
          } else {
            liff.logout()
            this.logIn()
          }
  
        },(error: any)=>{
          console.log(error.code, error.message);
        })
        console.log(liff);
      })
    })
    
  

  }

  logIn() {
    liff.login({ redirectUri: window.location.href })
  }
  logOut() {
    liff.logout()
    window.location.reload()
  }
  getProfile(): profile {
    return  (this.profileUsers.userId !== null)  ? this.profileUsers : null
  }
}
