import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FilterService, Filter } from './../filter/filter.service';
import { CategoryService, Category } from './../category/category.service';
import { ProductService } from './product.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { Component, OnInit, ElementRef, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  providers: [
    FilterService, 
    CategoryService,
    ProductService,
    ToastrService
  ]
})
export class ProductCreateComponent implements OnInit {

  defaultStatus = 'ACTIVE';
  defaultcoupon = 'Notapplicable';
  category: Category[];
  filter: Filter[];
  changedFilter: any[] = [];
  tinymcyContent: any = '';
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Product Create",
    activePage : "Products",
  }];

  constructor(
    private productservice: ProductService,
    private categoryservice: CategoryService,
    private filterservice: FilterService,
    private toastrservice: ToastrService,
    private elem: ElementRef,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef ) { 
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

      this.categoryservice.getAll()
      .subscribe(
        response => {
          this.category = response.data;
        });
  }

  public tinymcyFunction(productContent: any):void {
    this.tinymcyContent = productContent;
  }

  onCreate(form: HTMLInputElement) {
    this.process = true;

    let formData:FormData = new FormData();
    let files = this.elem.nativeElement.querySelector('#productImage').files;

    if (files.length < 6) {
      if (files.length == 0) {
        for (let i = 0; i < files.length; i++) {
          if (files[i].size > 900000) {
            this.toastrservice.showWarning('Product Image Size must be less than 900KB.');
            return false;
          }
          formData.append(`productImage[]`, files[i], files[i].name);
        }
      }else {
        this.toastrservice.showWarning('A Product Must have a image.');
        return false;
      }
    } else{ 
      this.toastrservice.showWarning('A Product can have MAX 5 images.');
      return false;
    }

    for (var property in form) {
      if (form.hasOwnProperty(property)) {
          formData.append(property, form[property]);
      }
    }

    this.productservice.createWithImage(formData)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Product', 'Created');
        },
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
