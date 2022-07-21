import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class ProductOptionType {
  constructor(
    public id: number, 
    public optionTypeName: string,
    public optionId: number,
    public typeData: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class ProductOptionTypeService extends DataService{
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/product/optiontype', http, authservice);
   }
}

