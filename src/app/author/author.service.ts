import { AuthService } from './../auth/auth.service'; 
import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Author {
  constructor(
    public id: number, 
    public authorName: string,
    public authorDetails: string,
    public authorDescription: string,
    public authorProfession: string,
    public authorAge: number,
    public authorEducation: string,
    public authorImgName: string,
    public authorImgPath: string,
    public authorImgSize: string,
    public authorImgType: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class AuthorService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/blogauthor', http, authservice);
   }
}
