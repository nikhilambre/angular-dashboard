import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ProductOptionService, ProductOption } from './product-option.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-option-edit',
  templateUrl: './product-option-edit.component.html',
  providers: [
    ProductOptionService,
    ToastrService
  ]
})
export class ProductOptionEditComponent implements OnInit {

  productoption: ProductOption[];
  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Option Edit",
    activePage : "Products",
  }];

  constructor(
    private productoptionservice: ProductOptionService, 
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

      this.productoptionservice.getOne(id)
        .subscribe(
          response => {
            this.productoption = response.data;
          });
    });
  }


  onUpdate(form: HTMLInputElement) {
    
    this.productoptionservice.update(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Product Option', 'Updated');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
