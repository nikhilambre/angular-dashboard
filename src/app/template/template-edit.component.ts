import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { Params, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { TemplateService, Template } from './template.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  providers: [
    ToastrService,
    TemplateService
  ]
})
export class TemplateEditComponent implements OnInit {

  template: Template[];
  
  pageHeaders: any[] = [{
    header : "Template",
    subHeader : "Template Update",
    activePage : "Templates",
  }];

  constructor(
    private templateservice: TemplateService,
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

      this.templateservice.getOne(id)
        .subscribe(
          response => {
            this.template = response.data;
          });
    });
  }

  onUpdate(form: HTMLInputElement) {
    
    this.templateservice.update(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Template', 'Updated');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastr.error('Something went wrong, Refresh and try again!', 'Oops!');
          }
          else throw error;
        });
  }

}
