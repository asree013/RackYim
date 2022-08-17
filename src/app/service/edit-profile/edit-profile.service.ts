import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { registerlineliffitemview } from 'src/app/Base/models/registerlineliffitemview';
import { patients } from 'src/app/components/register/register-type';
import { GatewayService } from 'src/app/Base/service/gateways/gateway.service';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  Rest_API: string = '';
  HttpHeaders = new HttpHeaders().set('Content-type', 'application/Jason');
  constructor(private gateway:GatewayService) { }
  EditerProfile(data: patients): Observable<patients> {
      return this.gateway.put(`patient/${data.id}`,data)
   
  }

  
}
