import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { Product, ProductService } from './product.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  providers: [
    ToastrService,
    ProductService
  ]
})
export class ProductComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  product: Product[];
  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Product List",
    activePage : "Products",
  }];

  constructor(
    private productservice: ProductService,
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
          this.dtTrigger.next();
        }
      );
  }

  onDelete(filter) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.productservice.delete(filter.id)
      .subscribe(
        response => {
          let index = this.product.indexOf(filter);
          this.product.splice(index, 1);
          this.toastrservice.showInfo('Product', 'Deleted');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
      }
  }

}
