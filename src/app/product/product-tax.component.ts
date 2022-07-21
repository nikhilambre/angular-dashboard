import { AppError } from './../shared/errorlibrary/app-error';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ProductTaxService, Producttax } from './product-tax.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-product-tax',
  templateUrl: './product-tax.component.html',
  providers: [
    ToastrService,
    ProductTaxService
  ]
})
export class ProductTaxComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  producttax: Producttax[];
  
  pageHeaders: any[] = [{
    header : "GST",
    subHeader : "GST Category List",
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
    this.producttaxservice.getAll()
    .subscribe(
      response => {
        this.producttax = response.data;
        this.dtTrigger.next();
      });
  }

  onDelete(producttax) {

    var result = confirm("Sure you Want to Delete?");
    if (result) {
      
      this.producttaxservice.delete(producttax.id)
      .subscribe(
        response => {
          let index = this.producttax.indexOf(producttax);
          this.producttax.splice(index, 1);
          this.toastrservice.showInfo('GST Category', 'Deleted');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
    }

  }
}
