import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { patients } from 'src/app/components/register/register-type';
import { Observable, throwError } from 'rxjs';
import { registerlineliffitemview } from 'src/app/Base/models/registerlineliffitemview';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  Rest_API: string = 'https://api-clinic-1001.herokuapp.com/api/v1/patient';
  // Rest_API: string = 'http://localhost:3033/api/v1/patient';
  HttpHeaders = new HttpHeaders().set('Content-type', 'application/jason');
  constructor(private httpClient: HttpClient) { }
  Register(data: registerlineliffitemview): Observable<registerlineliffitemview> {
    let API_URL = `${this.Rest_API}/createBylineliffservice`;
    return new Observable((obs) => {
      this.httpClient.post<registerlineliffitemview>(API_URL, data).subscribe((result) => {
        obs.next(result)
      }, (error: HttpErrorResponse) => {
        obs.error(error.error)
      })
    })

  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Handle Client Error
      errorMessage = error.error.message;
    }
    else {
      // Handle Server Error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
