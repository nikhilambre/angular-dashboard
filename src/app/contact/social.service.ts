import { AuthService } from './../auth/auth.service';
import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Social {
  constructor(
    public id: number, 
    public socialName: string,
    public socialLink: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class SocialService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/social', http, authservice);
   }
}