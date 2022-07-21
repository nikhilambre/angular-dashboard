import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Orderaddress {
  constructor(
    public id: number, 
    public customerId: number,
    public orderId: number,
    public addrType: string,
    public addrText: string,
    public addrCity: string,
    public addrState: string,
    public addrCountry: string,
    public addrPincode: string,
    public addrChat: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class OrderAddressService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/orderaddress', http, authservice);
   }
}
