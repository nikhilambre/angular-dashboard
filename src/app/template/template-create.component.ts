import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { TemplateService, Template } from './template.service';
import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-create',
  templateUrl: './template-create.component.html',
  providers: [
    ToastrService,
    TemplateService
  ]
})
export class TemplateCreateComponent implements OnInit {

  defaultStatus = 'ACTIVE';
  template: Template[];
  
  pageHeaders: any[] = [{
    header : "Template",
    subHeader : "Template Category",
    activePage : "Templates",
  }];

  constructor(
    private templateservice: TemplateService, 
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef,
    private elem: ElementRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onCreate(form: HTMLInputElement) {
    this.templateservice.create(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Template', 'Created');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastrservice.showError(error.originalError.statusText);
          }
          else throw error;
        });
  }

}
