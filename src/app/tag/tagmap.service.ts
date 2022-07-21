import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class TagMap {
  constructor(
    public id: number, 
    public postId: number,
    public tagId: number,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class TagmapService extends DataService {
    constructor(http: Http, authservice: AuthService) {
      super('api/dashboard/blogtagmap', http, authservice);
     }  
}
