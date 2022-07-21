import { AuthService } from './../auth/auth.service';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Admin {
  constructor(
    public id: number, 
    public username: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public job_role: string,
    public status: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class AdminService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/user', http, authservice);
   }
}