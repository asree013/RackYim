import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { patients } from 'src/app/components/register/register-type';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  Rest_API: string = 'https://api-clinic-1001.herokuapp.com/api/v1';
  HttpHeaders = new HttpHeaders().set('Content-type', 'application/jason');
  constructor(private httpClient: HttpClient) { }
  Register(data: patients): Observable<patients> {
    let API_URL = `${this.Rest_API}/patient/create`;
    return new Observable((obs) => {
      this.httpClient.post<patients>(API_URL, data).subscribe((result) => {
        obs.next(result)
      }, (error: HttpErrorResponse) => {
        this.handleError(error)
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
