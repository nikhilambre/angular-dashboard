import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Filter, FilterService } from './../filter/filter.service';
import { ActivatedRoute, Params } from '@angular/router';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { Category, CategoryService } from './category.service';
import { Component, OnInit, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  providers: [
    FilterService,
    ToastrService,
    CategoryService
  ]
})
export class CategoryEditComponent implements OnInit {

  category: Category[];
  filter: Filter[];
  process: boolean = false;
  pageHeaders: any[] = [{
    header : "Category",
    subHeader : "Category Edit",
    activePage : "Category",
  }];

  constructor(
    private categoryservice: CategoryService, 
    private toastrservice: ToastrService,
    private activatedRoute: ActivatedRoute, 
    private filterservice: FilterService,
    private elem: ElementRef,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

  ngOnInit() {

    this.filterservice.getAll()
      .subscribe(
        response => {
          this.filter = response.data;
        });

    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.categoryservice.getOne(id)
        .subscribe(
          response => {
            this.category = response.data;
          });
    });
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    let files = this.elem.nativeElement.querySelector('#categoryImage').files;

    if (files.length > 0) {

      let formData:FormData = new FormData();
      formData.append('categoryImage', files[0], files[0].name);

      for (var property in form) {
          if (form.hasOwnProperty(property)) {
              formData.append(property, form[property]);
          }
      }

      this.categoryservice.updateWithImage(formData, form.id)
        .subscribe(
          response => {
            this.process = false;
            this.toastrservice.showSuccess('Category', 'Updated');
          }, 
          (error: AppError) => {
            this.process = false;
            this.toastrservice.showError(error.originalError.statusText);
          });
    } else {

      this.categoryservice.update(form)
        .subscribe(
          response => {
            this.process = false;
            this.toastrservice.showSuccess('Category', 'Updated');
          }, 
          (error: AppError) => {
            this.process = false;
            this.toastrservice.showError(error.originalError.statusText);
          });
      
    }
  }
  
}
