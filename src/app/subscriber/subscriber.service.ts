import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Subscriber {
  constructor(
    public id: number, 
    public name: string,
    public customerId: string,
    public email: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class SubscriberService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/blogsubscription', http, authservice);
   }
}
