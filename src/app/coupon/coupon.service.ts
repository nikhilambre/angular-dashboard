import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Coupon {
  constructor(
    public id: number, 
    public couponCode: string,
    public couponPercentage: string,
    public couponAmount: string,
    public status: string,
    public couponType: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class CouponService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/coupon', http, authservice);
   }
}
