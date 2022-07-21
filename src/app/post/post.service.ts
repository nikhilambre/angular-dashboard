import { AuthService } from './../auth/auth.service'; 
import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Post {
  constructor(
    public id: number, 
    public authorId: number,
    public postTitle: string,
    public postContent: string,
    public readMinutes: number,
    public postStatus: string,
    public postType: string,
    public commentStatus: string,
    public commentCount: number,
    public view: number,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class PostService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/blogpost', http, authservice);
   }
}
