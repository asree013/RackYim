import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { secretkey } from '../../constant/cons';
import { profile } from '../../models/profile';
import { CompanyService } from '../company/company.service';
declare var liff: any
@Injectable({
  providedIn: 'root'
})
export class LineService {
  companyId: string
  constructor(private company: CompanyService) { }
  lineInit(): Observable<profile> {
    return new Observable((obs) => {
      this.company.getLiffId(secretkey).subscribe(async (result) => {
        await liff.init({ liffId: result.lineliffId }).then(async () => {
          if (await liff.isLoggedIn()) {
            let profile:profile = await liff.getProfile()
            profile.companyId = result.companyId;
            obs.next(profile)
          } else {
            this.logIn()
          }

        }, (error: any) => {
          console.log(error.code, error.message);
        })
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
  getProfile(): Observable<profile> {
    return new Observable((obs) => {
      liff.getProfile().then((result: profile) => {
        result.companyId = this.companyId
        obs.next(result)
      })
    })
  }
}
