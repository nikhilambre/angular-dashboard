import { AuthService } from './../auth/auth.service';
import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Producttax {
  constructor(
    public id: number, 
    public productId: number,
    public price: number,
    public currency: string,
    public priceForQnt: string,
    public discount: number,
    public tax: number,
    public finalPrice: number,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class ProductTaxService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/product/tax', http, authservice);
   }
}
