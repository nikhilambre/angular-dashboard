import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { ProductTaxService, Producttax } from './product-tax.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-tax-create',
  templateUrl: './product-tax-create.component.html',
  providers: [
    ToastrService,
    ProductTaxService
  ]
})
export class ProductTaxCreateComponent implements OnInit {

  producttax: Producttax[] = [];
  pageHeaders: any[] = [{
    header : "GST",
    subHeader : "GST Category Create",
    activePage : "GST",
  }];

  constructor(
    private producttaxservice: ProductTaxService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  onCreate(form: HTMLInputElement) {
    this.producttaxservice.create(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('GST Category', 'Created');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }
}
