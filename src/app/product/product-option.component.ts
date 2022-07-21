import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProductOptionService, ProductOption } from './product-option.service';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-product-option',
  templateUrl: './product-option.component.html',
  providers: [
    ProductOptionService,
    ToastrService
  ]
})
export class ProductOptionComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  productoption: ProductOption[];
  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Option List",
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
    this.productoptionservice.getAll()
    .subscribe(
      response => {
        this.productoption = response.data;
        this.dtTrigger.next();
      });
  }

  onDelete(productoption) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.productoptionservice.delete(productoption.id)
      .subscribe(
        response => {
          let index = this.productoption.indexOf(productoption);
          this.productoption.splice(index, 1);
          this.toastrservice.showInfo('Product Option', 'Deleted');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
      }
  }

}
