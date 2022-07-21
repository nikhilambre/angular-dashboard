import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SupportService, Support } from './support.service';

@Component({
  selector: 'app-support-edit',
  templateUrl: './support-edit.component.html',
  providers: [
    ToastrService,
    SupportService
  ]
})
export class SupportEditComponent implements OnInit {

  support: Support[];
  tinymcyContent: any = '';
  contentFromDB: any = '';
  process: boolean = false;
  
  pageHeaders: any[] = [{
    header : "Support",
    subHeader : "Support Edit",
    activePage : "Site Management",
  }];

  constructor(
    private supportservice: SupportService,
    private toastrservice: ToastrService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.supportservice.getOne(id)
        .subscribe(
          response => {
            this.support = response.data;
            this.tinymcyContent = response.data[0].answer;
            this.contentFromDB = response.data[0].answer;
          });
    });
  }

  public tinymcyFunction(postContent: any):void {
    this.tinymcyContent = postContent;
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    this.supportservice.update(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Support Question', 'Updated');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
