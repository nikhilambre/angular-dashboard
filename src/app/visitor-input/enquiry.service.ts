import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Enquiry {
  constructor(
    public id: number, 
    public enquiryName: string,
    public enquiryEmail: string,
    public enquiryContact: number,
    public productId: number,
    public enquiryText: string,
    public enquiryFlag: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class EnquiryService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/enquery', http, authservice);
   }
}