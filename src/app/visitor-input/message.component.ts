import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MessageService, Message } from './message.service';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  providers: [
    MessageService,
    ToastrService
  ]
})
export class MessageComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  message: Message[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Message",
    subHeader : "Message List",
    activePage : "Visitors Connect",
  }];

  constructor(
    private messageservice: MessageService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
    this.messageservice.getAll()
      .subscribe(
        response => {
          this.message = response.data;
          this.dtTrigger.next();
        });
  }

  onDelete(message) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.process = true;
    this.messageservice.delete(message.id)
      .subscribe(
        response => {
          this.process = false;
          let index = this.message.indexOf(message);
          this.message.splice(index, 1);
          this.toastrservice.showInfo('Message', 'Deleted');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
      }
  }

}
