import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { SubscriberService, Subscriber } from './subscriber.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  providers: [
    ToastrService,
    SubscriberService
  ]
})
export class SubscriberComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  subscriber: Subscriber[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Subscriber",
    subHeader : "Subscriber List",
    activePage : "Visitors",
  }];

  constructor(
    private subscriberservice: SubscriberService,
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
    this.subscriberservice.getAll()
      .subscribe(
        response => {
          this.subscriber = response.data;
          this.dtTrigger.next();
        });
  }

  onDelete(form) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.process = true;
    this.subscriberservice.delete(form.id)
      .subscribe(
        response => {
          this.process = false;
          let index = this.subscriber.indexOf(form);
          this.subscriber.splice(index, 1);
          this.toastrservice.showInfo('Subscriber', 'Deleted');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
    }
  }

}
