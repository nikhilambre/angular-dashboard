import { AuthService } from './../auth/auth.service'; import { DataService } from './../data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export class Message {
  constructor(
    public id: number, 
    public messageName: string,
    public messageEmail: string,
    public messageContact: number,
    public messageFlag: string,
    public messageText: string,
    public created_at: Date,
    public updated_at: Date) { }
}

@Injectable()
export class MessageService extends DataService {
  constructor(http: Http, authservice: AuthService) {
    super('api/dashboard/message', http, authservice);
   }
}
