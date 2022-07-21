import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Pageupdator {
  constructor(
    public id: number, 
    public username : string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class PageupdatorService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/pageupdator', http, authservice);
   }
}
