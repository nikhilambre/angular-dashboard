import { ToastrService } from './../services/toastr.service';
import { ProductOptionService, ProductOption } from './product-option.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProductOptionTypeService } from './product-option-type.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-option-type-create',
  templateUrl: './product-option-type-create.component.html',
  providers: [
    ProductOptionService,
    ProductOptionTypeService,
    ToastrService
  ]
})
export class ProductOptionTypeCreateComponent implements OnInit {

  productoption: ProductOption[];
  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Option Type Create",
    activePage : "Products",
  }];

  constructor(
    private productoptiontypeservice: ProductOptionTypeService, 
    private productoptionservice: ProductOptionService,
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

    this.productoptionservice.getAll()
    .subscribe(
      response => {
        this.productoption = response.data;
      });
  }

  onCreateOptionType(form: HTMLInputElement) {
    this.productoptiontypeservice.create(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Product Option Type', 'Created');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
