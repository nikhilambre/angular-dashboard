import { AuthService } from './../auth/auth.service'; 
import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Filter {
  constructor(
    public id: number, 
    public filterName: string,
    public filterType: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class FilterService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/filter', http, authservice);
   }
}