import { ToastrService } from './../services/toastr.service';
import { ProductOptionTypeMapService } from './product-option-type-map.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ProductOptionTypeService, ProductOptionType } from './product-option-type.service';
import { ProductOptionService, ProductOption } from './product-option.service';
import { ProductService, Product } from './product.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-option-map-create',
  templateUrl: './product-option-map-create.component.html',
  providers: [
    ProductService,
    ProductOptionService,
    ProductOptionTypeService,
    ProductOptionTypeMapService,
    ToastrService
  ]
})
export class ProductOptionMapCreateComponent implements OnInit {

  product: Product[] = [];
  productoption: ProductOption[] = [];
  productoptiontype: ProductOptionType[] = [];

  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Option Add",
    activePage : "Products",
  }];

  constructor(
    private productservice: ProductService,
    private productoptionservice: ProductOptionService,
    private productoptiontypeservice: ProductOptionTypeService,
    private productoptiontypemapservice: ProductOptionTypeMapService,
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
    this.productservice.getAll()
    .subscribe(
      response => { 
        this.product = response.data;
      });

    this.productoptionservice.getAll()
    .subscribe(
      response => { 
        this.productoption = response.data;
      });
  }

  onOptionChange(option) {
    this.productoptiontypeservice.getForId(option)
    .subscribe(
      response => {
        this.productoptiontype = response.data;
      });
  }

  onCreate(form: HTMLInputElement) {
    this.productoptiontypemapservice.create(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Product Option', 'Mapped');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
