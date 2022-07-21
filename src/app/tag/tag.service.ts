import { AuthService } from './../auth/auth.service';
import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Tag {
  constructor(
    public id: number, 
    public tagName: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class TagService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/blogtag', http, authservice);
   }
}
