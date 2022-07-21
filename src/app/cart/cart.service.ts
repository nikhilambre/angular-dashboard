import { AuthService } from './../auth/auth.service'; 
import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Cart {
  constructor(
    public id: number, 
    public productId: number,
    public productName: string,
    public currency: string,
    public productCost: number,
    public couponCode: string,
    public quantity: number,
    public status: string,
    public deliveryStatus: string,
    public cartCode: number,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class CartService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/cart', http, authservice);
   }
}
