import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Ordercomment {
  constructor(
    public id: number, 
    public customerId: number,
    public orderId: number,
    public commentName: string,
    public commentText: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class OrderCommentService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/ordercomment', http, authservice);
   }
}
