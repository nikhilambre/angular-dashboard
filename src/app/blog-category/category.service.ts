import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Category {
  constructor(
    public id: number, 
    public categoryName: string,
    public categoryDescription: string,
    public categoryStatus: string,
    public categoryImgName: string,
    public categoryImgPath: string,
    public categoryImgSize: string,
    public categoryImgType: string,
    public filterId: number,
    public filterName: string,
    public categoryTag: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class CategoryService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/blogcategory', http, authservice);
   }
}