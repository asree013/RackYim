import { Injectable } from '@angular/core';

declare var liff: any;

@Injectable({
  providedIn: 'root'
})
export class LineLiffService {

  constructor() { }

  initLineLiff() {
    return new Promise((resolve, reject) => {
      liff.init((data: any) => {
        resolve(liff.getProfile())
      }, (err: any)=>{
        reject(err)
      })
    })
  }

  getLineProfile() {
    return new Promise((resolve, reject) => {
      liff.getProfile((data: unknown) => {
        resolve(data)
      }, (err: any)=>{
        reject(err)
      })
    })
  }
}
