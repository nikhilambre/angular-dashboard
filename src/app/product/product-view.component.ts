import { Product, ProductService } from './product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  providers: [
    ProductService,
  ]
})
export class ProductViewComponent implements OnInit {

  pageLink: number;
  catmaps: any[];
  images: any[];
  url: string = '';

  product: Product[];
  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Product view",
    activePage : "Products",
  }];

  constructor(
    private productservice: ProductService, 
    private activatedRoute: ActivatedRoute) { }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

  ngOnInit() {
    this.url = this.productservice.getBaseUrl();

    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.pageLink = id;

      this.productservice.getOne(id)
        .subscribe(
          response => {
            this.product = response.product;
            this.catmaps = response.catmaps;
            this.images = response.images;
          });
    });
  }

}
