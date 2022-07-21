import { AuthService } from './../auth/auth.service'; 
import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Affiliatelead {
  constructor(
    public id: number, 
    public affiliateId: number,
    public affiliate_ref: string,
    public orderId: number,
    public orderCost: number,
    public orderStatus: string,
    public affiliateBillingStatus: string,
    public affiliatePaid: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class AffiliateLeadService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/affiliatelead', http, authservice);
   }
}
