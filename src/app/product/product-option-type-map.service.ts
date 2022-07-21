import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class ProductOptionTypeMap {
  constructor(
    public id: number, 
    public productId: number,
    public optionId: number,
    public optionTypeId: number,
    public typeStock: number,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class ProductOptionTypeMapService extends DataService{
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/product/optiontypemap', http, authservice);
   }
}

