import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { reserves } from 'src/app/components/reserve/reserve.type';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  Reserve_API: string = 'https://api-clinic-1001.herokuapp.com/api/v1/booking';

  HttpHeaders = new HttpHeaders().set('Content-type', 'application/jason');

  constructor(private httpClient: HttpClient) { }

  Reserves(data: reserves): Observable<any> {
    let API_URL = `${this.Reserve_API}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )

  }


  delete(id: any): Observable<any> {
    let API_URL = `${this.Reserve_API}/delete${id}`;
    return this.httpClient.delete(API_URL, { headers: this.HttpHeaders })
  }
  gettyptlist(companyid:string): Observable<any> {
    let API_URL = `${this.Reserve_API}/typebooking/${companyid}`;
    return this.httpClient.delete(API_URL, { headers: this.HttpHeaders })
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
