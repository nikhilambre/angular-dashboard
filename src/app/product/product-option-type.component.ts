import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ProductOptionTypeService, ProductOptionType } from './product-option-type.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-product-option-type',
  templateUrl: './product-option-type.component.html',
  providers: [
    ProductOptionTypeService,
    ToastrService
  ]
})
export class ProductOptionTypeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  productoptiontype: ProductOptionType[];
  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Option Types",
    activePage : "Products",
  }];

  constructor(
    private productoptiontypeservice: ProductOptionTypeService,
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
    this.productoptiontypeservice.getAll()
    .subscribe(
      response => {
        this.productoptiontype = response.data;
        this.dtTrigger.next();
      });
  }

  onDelete(productoptiontype) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.productoptiontypeservice.delete(productoptiontype.id)
      .subscribe(
        response => {
          let index = this.productoptiontype.indexOf(productoptiontype);
          this.productoptiontype.splice(index, 1);
          this.toastrservice.showInfo('Product Option Type', 'Deleted');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
      }
  }


}
