import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Review {
  constructor(
    public id: number, 
    public productId: number,
    public productName: string,
    public customerId: number,
    public customerVarId: string,
    public reviewContent: string,
    public reviewStatus: string,
    public reviewType: string,
    public reviewParentId: number,
    public rating: number,
    public ratingVar1: string,
    public ratingVar2: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class ReviewService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/review', http, authservice);
   }
}
