import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { Admin, AdminService } from './admin.service';
import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [
    ToastrService,
    AdminService
  ]
})
export class AdminComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  admin: Admin[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Users",
    subHeader : "Users List",
    activePage : "Users",
  }];

  constructor(
    private adminservice: AdminService,
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
    this.adminservice.getAll()
      .subscribe(
        response => {
          this.admin = response.data;
          this.dtTrigger.next();
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

  onDelete(admin) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {
      this.process = true;
      this.adminservice.delete(admin.id)
      .subscribe(
        response => {
          this.process = false;
          let index = this.admin.indexOf(admin);
          this.admin.splice(index, 1);
          this.toastrservice.showSuccess('User', 'Deleted');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
    }

  }


}
