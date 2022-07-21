import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FilterService, Filter } from './../filter/filter.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { CategoryService } from './category.service';
import { Component, OnInit, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  providers: [
    FilterService,
    CategoryService,
    ToastrService
  ]
})
export class CategoryCreateComponent implements OnInit {

  defaultStatus = 'ACTIVE';
  filter: Filter[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Category",
    subHeader : "Create Category",
    activePage : "Category",
  }];

  constructor(
    private categoryservice: CategoryService, 
    private filterservice: FilterService, 
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef,
    private elem: ElementRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    this.filterservice.getAll()
      .subscribe(
        response => {
          this.filter = response.data;
        });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onCreate(form: HTMLInputElement) {
    this.process = true;
    let formData:FormData = new FormData();
    let files = this.elem.nativeElement.querySelector('#categoryImage').files;

    if (files.length > 0) {
      formData.append('categoryImage', files[0], files[0].name);
    }

    for (var property in form) {
        if (form.hasOwnProperty(property)) {
            formData.append(property, form[property]);
        }
    }
    
    this.categoryservice.createWithImage(formData)
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
