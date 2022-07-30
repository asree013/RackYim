import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GatewayService } from 'src/app/Base/service/gateways/gateway.service';
import { patients } from 'src/app/components/register/register-type';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private gateway: GatewayService) { }

  getPatientByLineliffId(liffId: string): Observable<patients> {
    let path = `patient/getpatientBylineliffid/${liffId}`
    return this.gateway.get(path);
  }

}
