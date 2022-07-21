import { ToastrService } from './../services/toastr.service';
import { ActivatedRoute, Params } from '@angular/router';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ProductOptionTypeService, ProductOptionType } from './product-option-type.service';
import { ProductOptionService, ProductOption } from './product-option.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-option-type-edit',
  templateUrl: './product-option-type-edit.component.html',
  providers: [
    ProductOptionService,
    ProductOptionTypeService,
    ToastrService
  ]
})
export class ProductOptionTypeEditComponent implements OnInit {

  productoption: ProductOption[];
  productoptiontype: ProductOptionType[];
  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Option Type Edit",
    activePage : "Products",
  }];

  constructor(
    private productoptiontypeservice: ProductOptionTypeService, 
    private productoptionservice: ProductOptionService,
    public toastr: ToastsManager,
    private toastrservice: ToastrService,
    private activatedRoute: ActivatedRoute,  
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

      this.activatedRoute.params.subscribe((params: Params) => {
        let id = params['id'];
  
        this.productoptiontypeservice.getOne(id)
          .subscribe(
            response => {
              this.productoptiontype = response.data;
            });
      });
  }

  onUpdate(form: HTMLInputElement) {
    this.productoptiontypeservice.update(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Product Option Type', 'Updated');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
