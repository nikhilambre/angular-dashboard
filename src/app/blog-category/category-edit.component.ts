import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { Category, CategoryService } from './category.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  providers: [
    ToastrService,
    CategoryService
  ]
})
export class CategoryEditComponent implements OnInit {

  category: Category[];
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
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.categoryservice.getOne(id)
        .subscribe(
          response => {
            this.category = response.data;
          });
    });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
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

