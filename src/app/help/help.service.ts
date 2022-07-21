import { AuthService } from './../auth/auth.service';
import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Help {
  constructor(
    public id: number, 
    public helpQuestion: string,
    public helpAnswer: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class HelpService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/help', http, authservice);
   }
}
