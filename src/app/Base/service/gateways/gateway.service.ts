import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GatewayService {
  private url: string = "https://api-clinic-1001.herokuapp.com/api/v1/"
  constructor(private http: HttpClient) { }
  get(path: string): Observable<any> {
    return new Observable((obs) => {
      this.http.get(this.url + path).subscribe((result) => {
        obs.next(result)
      }, (error: HttpErrorResponse) => {
        obs.error(error)
      })
    })
  }
}
