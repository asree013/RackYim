import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { reserves } from 'src/app/components/reserve/reserve.type';
import { GatewayService } from 'src/app/Base/service/gateways/gateway.service';
import { Selecter } from 'src/app/Base/models/selecter';
import { Booking } from 'src/app/Base/models/booking';
import { booking } from 'src/app/components/history-reserve/history_reserve_type';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  Reserve_API: string = 'https://api-clinic-1001.herokuapp.com/api/v1/booking';
  // Reserve_API: string = 'http://localhost:3033/api/v1/booking';

  HttpHeaders = new HttpHeaders().set('Content-type', 'application/jason');

  constructor(private httpClient: HttpClient, private gateway: GatewayService) { }

  Reserves(data: Booking): Observable<any> {
    let API_URL = `${this.Reserve_API}/create`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )

  }
  getrepoByPatientIdAndBookingStatusBookingByLineliff(id:string): Observable<booking> {
    let API_URL = `${this.Reserve_API}/getrepoByPatientIdAndBookingStatusBookingByLineliff/${id}`;
    return this.httpClient.get<booking>(API_URL)
     
  }

  delete(id: any): Observable<any> {
    let API_URL = `${this.Reserve_API}/delete${id}`;
    return this.httpClient.delete(API_URL, { headers: this.HttpHeaders })
  }
  gettyptlist(companyid: string): Observable<any> {
    let API_URL = `${this.Reserve_API}/typebooking/${companyid}`;
    return this.httpClient.delete(API_URL, { headers: this.HttpHeaders })
  }

  getDorpdonwTypeooking(companyId: string): Observable<Selecter[]> {
    return this.gateway.get(`/dropdown/typebooking/${companyId}`)
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
