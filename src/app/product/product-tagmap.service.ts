import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class ProductTagMap {
  constructor(
    public id: number, 
    public productId: number,
    public tagId: number,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class ProductTagmapService extends DataService {

  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/product/tagmap', http, authservice);
   }

}
