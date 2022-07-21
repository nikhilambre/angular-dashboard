import { Http } from '@angular/http';
import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Injectable } from '@angular/core';

export class Profile {
  constructor(
    public id: number, 
    public firstname: string,
    public lastname: string,
    public email: string,
    public created_at: Date,
    public updated_at: Date) { }
}


@Injectable()
export class ProfileService extends DataService {

  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/user', http, authservice);
   }

}
