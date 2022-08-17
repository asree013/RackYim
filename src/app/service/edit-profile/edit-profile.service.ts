import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { registerlineliffitemview } from 'src/app/Base/models/registerlineliffitemview';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  Rest_API: string = '';
  HttpHeaders = new HttpHeaders().set('Content-type', 'application/Jason');
  constructor(private httClient: HttpClient) { }
  EditerProfile(data: registerlineliffitemview): Observable<registerlineliffitemview> {
    let API_URL = `${this.Rest_API}/editByliffservice`;
    return new Observable((obs) => {
      this.httClient.put<registerlineliffitemview>(API_URL, data).subscribe((result) => {
        obs.next(result)
      }, (error:HttpErrorResponse) => {
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
