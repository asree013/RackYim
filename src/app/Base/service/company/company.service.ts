import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Liff } from '../../models/liff';

import { GatewayService } from '../gateways/gateway.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private gateway: GatewayService) { }
  getLiffId(secretkey: string): Observable<Liff> {
    return  this.gateway.get(`company/getlineliffidBycompanysecretkey/${secretkey}`)
  } 
}
