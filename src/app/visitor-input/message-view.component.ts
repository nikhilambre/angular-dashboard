import { ActivatedRoute, Params } from '@angular/router';
import { MessageService, Message } from './message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  providers: [
    MessageService
  ]
})
export class MessageViewComponent implements OnInit {

  message: Message[];
  pageHeaders: any[] = [{
    header : "Message",
    subHeader : "Message view",
    activePage : "Visitors Connect",
  }];

  constructor(
    private messageservice: MessageService, 
    private activatedRoute: ActivatedRoute) { }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.messageservice.getOne(id)
        .subscribe(
          response => {
            this.message = response.data;
          });
    });
  }

}
