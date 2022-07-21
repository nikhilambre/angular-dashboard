import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from './../services/toastr.service';
import { ProductTaxService, Producttax } from './product-tax.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-tax-edit',
  templateUrl: './product-tax-edit.component.html',
  providers: [
    ToastrService,
    ProductTaxService
  ]
})
export class ProductTaxEditComponent implements OnInit {

  producttax: Producttax[];
  pageHeaders: any[] = [{
    header : "GST",
    subHeader : "GST Category Edit",
    activePage : "GST",
  }];

  constructor(
    private producttaxservice: ProductTaxService,
    private toastrservice: ToastrService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.producttaxservice.getOne(id)
        .subscribe(
          response => {
            this.producttax = response.data;
          });
    });
  }

  onUpdate(form: HTMLInputElement) {
  
    this.producttaxservice.update(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('GST Category', 'Updated');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
