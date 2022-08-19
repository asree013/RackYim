import { Injectable } from '@angular/core';
import { Observable, observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { reserves } from 'src/app/components/reserve/reserve.type';
import { Booking } from 'src/app/Base/models/booking';


@Injectable({
  providedIn: 'root'
})
export class HistoyReserveService {

  Reserve_API: string = 'https://api-clinic-1001.herokuapp.com/api/v1/booking';

  HttpHeaders = new HttpHeaders().set('Content-type', 'application/jason');

  constructor(private httpClient: HttpClient) { }

  GetOnereserve(id: any): Observable<any> {
    let API_URL = `${this.Reserve_API}/reserve/${id}`;
    return this.httpClient.get(API_URL, { headers: this.HttpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

  delete(id: any): Observable<any> {
    let API_URL = `${this.Reserve_API}/delete${id}`;
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
  getlistreserveBypatientId(id: string):Observable<Booking[]> {
    let API_URL = `${this.Reserve_API}/getlistreserveBypatientId/${id}`;
    return this.httpClient.get<Booking[]>(API_URL, { headers: this.HttpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }
 
}
