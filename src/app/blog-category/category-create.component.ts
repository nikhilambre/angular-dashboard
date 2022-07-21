import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { CategoryService } from './category.service';
import { Component, OnInit, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  providers: [
    CategoryService,
    ToastrService
  ]
})
export class CategoryCreateComponent implements OnInit {

  defaultStatus = 'ACTIVE';
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Category",
    subHeader : "Create Category",
    activePage : "Category",
  }];

  constructor(
    private categoryservice: CategoryService, 
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onCreate(form: HTMLInputElement) {
    this.process = true;
    this.categoryservice.create(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Category', 'Created');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }


}
