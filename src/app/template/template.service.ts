import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Template {
  constructor(
    public id: number, 
    public type: string,
    public typeId: number,
    public subType: number,
    public typeName: string,
    public typeDescription: string,
    public htmlContent: string,
    public customStyle: string,
    public vendorStyle: string,
    public fonts: string,
    public vendorScripts: string,
    public scripts: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class TemplateService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/template', http, authservice);
   }
}
