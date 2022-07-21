import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Like {
  constructor(
    public id: number, 
    public customerId: number,
    public postId: number,
    public likeType: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class LikeService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/blogpostlike', http, authservice);
   }
}
