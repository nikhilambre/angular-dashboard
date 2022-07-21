import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { TemplateService, Template } from './template.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-view',
  templateUrl: './template-view.component.html',
  providers: [
    ToastrService,
    TemplateService
  ]
})
export class TemplateViewComponent implements OnInit {

  template: Template[];

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

}
