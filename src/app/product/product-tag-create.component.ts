import { ToastrService } from './../services/toastr.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ProductTagService, ProductTag } from './product-tag.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-tag-create',
  templateUrl: './product-tag-create.component.html',
  providers: [
    ProductTagService,
    ToastrService
  ]
})
export class ProductTagCreateComponent implements OnInit {

  producttag: ProductTag[];

  constructor(
    private producttagservice: ProductTagService, 
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onCreate(form: HTMLInputElement) {
    this.producttagservice.create(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Tag', 'Created');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
