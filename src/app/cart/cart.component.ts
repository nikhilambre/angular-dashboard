import { ActivatedRoute, Params } from '@angular/router';
import { CartService, Cart } from './cart.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  providers: [
    ToastrService,
    CartService
  ]
})
export class CartComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  cart: Cart[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Cart",
    subHeader : "Cart List",
    activePage : "Cart",
  }];

  constructor(
    private cartservice: CartService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
    let id = params['id'];

    this.cartservice.getForId(id)
    .subscribe(
      response => {
        this.cart = response.data;
        this.dtTrigger.next();
      });

    });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
