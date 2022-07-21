import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Comment {
  constructor(
    public id: number, 
    public postId: number,
    public customerId: number,
    public customerVarId: string,
    public commentContent: string,
    public commentStatus: string,
    public commentType: string,
    public commentFlag: string,
    public commentParentId: number,
    public like: number,
    public dislike: number,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class CommentService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/blogcomment', http, authservice);
   }
}