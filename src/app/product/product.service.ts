import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Product {
  constructor(
    public id: number, 
    public productName: string,
    public description: string,
    public shortDescription: string,
    public status: string,
    public productStock: number,
    public mark: string,
    public imageName: string[],
    public imagePath: string[],
    public imageType: string[],
    public imageSize: number[],
    public categoryId: number[],
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class ProductService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/product', http, authservice);
   }
}