import { ToastrService } from './../services/toastr.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ProductOptionService } from './product-option.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-option-create',
  templateUrl: './product-option-create.component.html',
  providers: [
    ProductOptionService,
    ToastrService
  ]
})
export class ProductOptionCreateComponent implements OnInit {

  defaultStatus = 'ACTIVE';
  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Option Create",
    activePage : "Products",
  }];
  
  constructor(
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
  }

  onCreateOption(form: HTMLInputElement) {
    this.productoptionservice.create(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Product Option', 'Created');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
