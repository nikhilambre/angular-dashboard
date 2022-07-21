import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductImageService extends DataService{
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/product/image', http, authservice);
   }
}
