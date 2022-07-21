import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Media {
  constructor(
    public id: number, 
    public mediaName: string,
    public mediaPath: string,
    public mediaType: string,
    public mediaSize: number,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class MediaService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/blogmedia', http, authservice);
   }
}
