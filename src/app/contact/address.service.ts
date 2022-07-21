import { AuthService } from './../auth/auth.service';
import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Address {
  constructor(
    public id: number, 
    public addressHead: string,
    public addressBody: string,
    public addressNumber: number,
    public addressName: string,
    public addressEmail: string,
    public addressLine1: string,
    public addressLine2: string,
    public addressLine3: string,
    public addressLine4: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class AddressService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/address', http, authservice);
   }
}