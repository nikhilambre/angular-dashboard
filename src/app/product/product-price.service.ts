import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Productprice {
  constructor(
    public id: number, 
    public productId: number,
    public price: number,
    public currency: string,
    public priceForQnt: string,
    public discount: number,
    public tax: number,
    public taxCategoryId: number,
    public taxCategory: string,
    public taxRate: number,
    public finalPrice: number,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class ProductPriceService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/product/price', http, authservice);
   }
}
