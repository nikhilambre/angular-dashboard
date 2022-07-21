import { ToastrService } from './../services/toastr.service';
import { ProductOptionTypeService, ProductOptionType } from './product-option-type.service';
import { ProductOptionService, ProductOption } from './product-option.service';
import { ProductService, Product } from './product.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductOptionTypeMapService, ProductOptionTypeMap } from './product-option-type-map.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-option-map-edit',
  templateUrl: './product-option-map-edit.component.html',
  providers: [
    ProductService,
    ProductOptionService,
    ProductOptionTypeService,
    ProductOptionTypeMapService,
    ToastrService
  ]
})
export class ProductOptionMapEditComponent implements OnInit {

  product: Product[] = [];
  productoption: ProductOption[] = [];
  productoptiontype: ProductOptionType[] = [];
  productoptiontypemap: ProductOptionTypeMap[] = [];

  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Option Map Edit",
    activePage : "Products",
  }];

  constructor(
    private productservice: ProductService,
    private productoptionservice: ProductOptionService,
    private productoptiontypeservice: ProductOptionTypeService,
    private productoptiontypemapservice: ProductOptionTypeMapService, 
    private activatedRoute: ActivatedRoute,
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
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.productoptiontypemapservice.getOne(id)
        .subscribe(
          response => {
            this.productoptiontypemap = response.data;

            this.productoptiontypeservice.getForId(this.productoptiontypemap[0].optionId)
            .subscribe(
              response => {
                this.productoptiontype = response.data;
            });

          });
    });

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

  onUpdate(form: HTMLInputElement) {
    
    this.productoptiontypemapservice.update(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Product Option Mapping', 'Updated');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
