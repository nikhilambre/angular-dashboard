import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Seo {
  constructor(
    public id: number, 
    public pageName: string,
    public seoStatus : string,
    public title: string,
    public description: string,
    public keyword: string,
    public ogImgName: string,
    public ogImgPath: string,
    public ogImgSize: string,
    public ogImgType: string,
    public twitterCardType: string,
    public twitterSite: string,
    public twitterCreator: string,
    public twitterAppCountry: string,
    public twitterAppNameIphone: string,
    public twitterAppIdIphone: string,
    public twitterAppUrlIphone: string,
    public twitterAppNameIpad: string,
    public twitterAppIdIpad: string,
    public twitterAppUrlIpad: string,
    public twitterAppNameGoogleplay: string,
    public twitterAppIdGoogleplay: string,
    public twitterAppUrlGoogleplay: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class SeoService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/seo', http, authservice);
   }
}
