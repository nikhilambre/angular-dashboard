import { AuthService } from './../auth/auth.service'; 
import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Support {
  constructor(
    public id: number, 
    public question: string,
    public questionSlug: string,
    public answer: string,
    public status: string,
    public view: number,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class SupportService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/support', http, authservice);
   }
}
