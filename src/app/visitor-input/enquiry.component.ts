import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { Enquiry, EnquiryService } from './enquiry.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-enquery',
  templateUrl: './enquiry.component.html',
  providers: [
    EnquiryService,
    ToastrService
  ]
})
export class EnquiryComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  enquiry: Enquiry[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Enquiry",
    subHeader : "Enquiry List",
    activePage : "Visitors Connect",
  }];

  constructor(
    private enquiryservice: EnquiryService,
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
    this.enquiryservice.getAll()
      .subscribe(
        response => {
          this.enquiry = response.data;
          this.dtTrigger.next();
        });
  }

  onDelete(enquiry) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.process = true;
    this.enquiryservice.delete(enquiry.id)
      .subscribe(
        response => {
          this.process = false;
          let index = this.enquiry.indexOf(enquiry);
          this.enquiry.splice(index, 1);
          this.toastrservice.showInfo('Enquiry', 'Deleted');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
      }
  }

}
