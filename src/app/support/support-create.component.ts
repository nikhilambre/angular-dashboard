import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { SupportService, Support } from './support.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-support-create',
  templateUrl: './support-create.component.html',
  providers: [
    ToastrService,
    SupportService
  ]
})
export class SupportCreateComponent implements OnInit {

  defaultStatus = 'ACTIVE';
  support: Support[] = [];
  process: boolean = false;
  tinymcyContent: any = '';

  pageHeaders: any[] = [{
    header : "Support",
    subHeader : "Support Create",
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
  }

  public tinymcyFunction(postContent: any):void {
    this.tinymcyContent = postContent;
  }

  onCreate(form: HTMLInputElement) {
    this.process = true;
    this.supportservice.create(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Support', 'Created');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
