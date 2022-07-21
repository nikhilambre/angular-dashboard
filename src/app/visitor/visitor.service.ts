import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Visitor {
  constructor(
    public id: number, 
    public name: string,
    public lastname: string,
    public email: string,
    public contact_no: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class VisitorService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/visitor', http, authservice);
   }
}
