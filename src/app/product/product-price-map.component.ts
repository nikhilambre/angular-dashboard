import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ProductPriceService, Productprice } from './product-price.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-product-price-map',
  templateUrl: './product-price-map.component.html',
  providers: [
    ProductPriceService,
    ToastrService
  ]
})
export class ProductPriceMapComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  price: Productprice[];
  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Price Map",
    activePage : "Products",
  }];

  constructor(
    private productpriceservice: ProductPriceService,
    private activatedRoute: ActivatedRoute,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.productpriceservice.getForId(id)
      .subscribe(
        response => {
          this.price = response.data;
          this.dtTrigger.next();          
        });

    });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onDelete(price) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.productpriceservice.delete(price.id)
      .subscribe(
        response => {
          let index = this.price.indexOf(price);
          this.price.splice(index, 1);
          this.toastrservice.showInfo('Product Price', 'Deleted');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });

      }
  }

}
