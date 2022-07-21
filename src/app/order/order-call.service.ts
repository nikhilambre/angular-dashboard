import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Ordercall {
  constructor(
    public id: number, 
    public customerId: number,
    public orderId: number,
    public orderCode: string,
    public callStatus: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class OrderCallService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/ordercall', http, authservice);
   }
}
