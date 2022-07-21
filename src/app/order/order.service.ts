import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Order {
  constructor(
    public id: number, 
    public customerId: number,
    public orderCode: string,
    public orderName: string, 
    public orderOrgName: string,
    public orderEmail: string,
    public orderContactNo: number, 
    public orderCurrency: string,
    public orderCost: number,
    public orderDescription: string, 
    public productId: number,
    public productCode: string,
    public orderStatus: string, 
    public billingStatus: string,
    public deliveryStatus: string,
    public orderData1: string, 
    public orderData2: string,
    public orderData3: string,
    public orderData4: string,
    public orderIp: string,
    public orderTerms: number,
    public cancelled_on: Date,
    public dispatch_on: Date,
    public delivered_on: Date,
    public completed_on: Date,
    public replace_on: Date,
    public refund_on: Date,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class OrderService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/order', http, authservice);
   }
}
