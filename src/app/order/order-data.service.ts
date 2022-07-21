import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Orderdata {
  constructor(
    public id: number, 
    public customerId: number,
    public orderId: number,
    public type: string,
    public typeId: string,
    public subType: string,
    public typeName: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class OrderDataService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/orderdata', http, authservice);
   }
}
