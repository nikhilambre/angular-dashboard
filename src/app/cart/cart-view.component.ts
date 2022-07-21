import { ActivatedRoute, Params } from '@angular/router';
import { CartService, Cart } from './cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  providers:[
    CartService
  ]
})
export class CartViewComponent implements OnInit {

  cart: Cart[];
  cartId: number;
  pageHeaders: any[] = [{
    header : "Cart",
    subHeader : "Cart View",
    activePage : "Cart",
  }];

  constructor(
    private cartService: CartService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.cartId = id;

      this.cartService.getOne(id)
        .subscribe(
          response => {
            this.cart = response.data;
          });
    });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
