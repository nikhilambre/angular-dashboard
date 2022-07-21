import { ToastrService } from './../services/toastr.service';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProductOptionTypeMapService, ProductOptionTypeMap } from './product-option-type-map.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-product-option-map-map',
  templateUrl: './product-option-map-map.component.html',
  providers: [
    ToastrService,
    ProductOptionTypeMapService
  ]
})
export class ProductOptionMapMapComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  productoptiontypemap: ProductOptionTypeMap[] = [];
  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Option List",
    activePage : "Products",
  }];

  constructor(
    private productoptiontypemapservice: ProductOptionTypeMapService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastsManager,
    private toastrservice: ToastrService,
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

      this.productoptiontypemapservice.getForId(id)
      .subscribe(
        response => {
          this.productoptiontypemap = response.data;
          this.dtTrigger.next();
        });

    });

  }

  onDelete(price) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.productoptiontypemapservice.delete(price.id)
      .subscribe(
        response => {
          let index = this.productoptiontypemap.indexOf(price);
          this.productoptiontypemap.splice(index, 1);
          this.toastrservice.showInfo('Product Option Mapping', 'Deleted');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });

      }
  }

}

