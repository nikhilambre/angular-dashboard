import { AuthService } from './../auth/auth.service';
import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Iframe {
  constructor(
    public id: number, 
    public iframeLink: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class IframeService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/iframe', http, authservice);
   }
}