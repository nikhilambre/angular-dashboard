import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { SupportService, Support } from './support.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  providers: [
    ToastrService,
    SupportService
  ]
})
export class SupportComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  support: Support[];
  process: boolean = false;
  
  pageHeaders: any[] = [{
    header : "Support",
    subHeader : "Support List",
    activePage : "Site Management",
  }];

  constructor(
    private supportservice: SupportService,
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
    this.supportservice.getAll()
      .subscribe(
        response => {
          this.support = response.data;
          this.dtTrigger.next();
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

  onDelete(filter) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {
      
      this.process = true;
      this.supportservice.delete(filter.id)
      .subscribe(
        response => {
          this.process = false;
          let index = this.support.indexOf(filter);
          this.support.splice(index, 1);
          this.toastrservice.showInfo('Support Question', 'Deleted');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
    }

  }

}
