import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ToastrService } from './../services/toastr.service';
import { AppError } from './../shared/errorlibrary/app-error';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService, Category } from './category.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  providers:[
    ToastrService,
    CategoryService
  ]
})
export class CategoryViewComponent implements OnInit {

  category: Category[];
  pageHeaders: any[] = [{
    header : "Category",
    subHeader : "Category view",
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
          },
          (error: AppError) => {
            this.toastrservice.showError(error.originalError.statusText);
          });
    });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
