import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Params, ActivatedRoute } from '@angular/router';
import { ProductPriceService, Productprice } from './product-price.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-price-view',
  templateUrl: './product-price-view.component.html',
  providers: [
    ProductPriceService,
  ]
})
export class ProductPriceViewComponent implements OnInit {

  productprice: Productprice[];

  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Price View",
    activePage : "Products",
  }];

  constructor(
    private productpriceservice: ProductPriceService,
    private activatedRoute: ActivatedRoute,
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

      this.productpriceservice.getOne(id)
        .subscribe(
          response => {
            this.productprice = response.data;
          });
    });
  }

}
