import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { TemplateService, Template } from './template.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  providers: [
    ToastrService,
    TemplateService
  ]
})
export class TemplateComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  template: Template[];
  
  pageHeaders: any[] = [{
    header : "Template",
    subHeader : "Template List",
    activePage : "Templates",
  }];

  constructor(
    private templateservice: TemplateService,
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
    this.templateservice.getAll()
    .subscribe(
      response => {
        this.template = response.data;
        this.dtTrigger.next();
      });
  }

  onDelete(template) {

    var result = confirm("Sure you Want to Delete?");
    if (result) {
      
      this.templateservice.delete(template.id)
      .subscribe(
        response => {
          let index = this.template.indexOf(template);
          this.template.splice(index, 1);
          this.toastrservice.showInfo('Template', 'Deleted');
        }, 
        (error: AppError) => {
          if (error instanceof NotFoundError)
            this.toastrservice.showError(error);
          else throw error;
        });
    }

  }

}
