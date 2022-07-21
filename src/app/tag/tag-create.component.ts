import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TagService, Tag } from './tag.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-tag-create',
  templateUrl: './tag-create.component.html',
  providers: [
    ToastrService,
    TagService
  ]
})
export class TagCreateComponent implements OnInit {

  tag: Tag[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Tags",
    subHeader : "Tag Create",
    activePage : "Tags",
  }];
  
  constructor(
    private tagservice: TagService, 
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
    this.tagservice.create(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Tag', 'Created');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
