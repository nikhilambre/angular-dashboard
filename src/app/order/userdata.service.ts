import { AuthService } from './../auth/auth.service';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Userdata {
  constructor(
    public id: number, 
    public customerId: number,
    public orderId: number,
    public domainName: string,
    public tagLine: string,
    public contactEmail: string,
    public contactAddr1: string,
    public contactAddr2: string,
    public contentFile: string,
    public seoContent: string,
    public pageContent: string,
    public images: string,
    public brandImage: string,
    public favicon: string,
    public video: string,
    public videoLink: string,
    public font: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class UserdataService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/userdata', http, authservice);
   }
}
