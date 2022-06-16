import { Injectable } from '@angular/core';
import { Observable , throwError } from 'rxjs';
import { catchError , map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { patients } from 'src/app/components/register/register-type';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  Rest_API: string = 'https://api-clinic-1001.herokuapp.com/api/v1';

  HttpHeaders = new HttpHeaders().set('Content-type' , 'application/jason');

  constructor(private httpClient : HttpClient) { }

  Register(data: patients): Observable<any> {
    let API_URL = `${this.Rest_API}/patient/create`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse){
    let errorMessage ='';
    if (error.error instanceof ErrorEvent){
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
