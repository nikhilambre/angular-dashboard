import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ParentcatService, Parentcat } from './parentcat.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-parentcat-create',
  templateUrl: './parentcat-create.component.html',
  providers: [
    ToastrService,
    ParentcatService
  ]
})
export class ParentcatCreateComponent implements OnInit {

  defaultStatus = 'ACTIVE';
  parentcat: Parentcat[] = [];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Parent Category",
    subHeader : "Parent Category Create",
    activePage : "Category",
  }];

  constructor(
    private parentcatservice: ParentcatService,
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
    this.parentcatservice.create(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Parent Category', 'Created');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
