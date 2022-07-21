import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AdminService } from './admin.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  providers: [
    ToastrService,
    AdminService
  ]
})
export class AdminCreateComponent implements OnInit {

  process: boolean = false;
  pageHeaders: any[] = [{
    header : "Users",
    subHeader : "Users List",
    activePage : "Users",
  }];

  constructor(
    private adminervice: AdminService, 
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
  }

  onCreate(form: HTMLInputElement) {
    this.process = true;

    this.adminervice.create(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('User', 'Created');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }


}
