import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from './../services/toastr.service';
import { CartService, Cart } from './cart.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-cart-edit',
  templateUrl: './cart-edit.component.html',
  providers: [
    ToastrService,
    CartService
  ]
})
export class CartEditComponent implements OnInit {

  cart: Cart[];
  process: boolean = false;
  pageHeaders: any[] = [{
    header : "Cart Product",
    subHeader : "Cart Product Edit",
    activePage : "Cart",
  }];

  constructor(
    private cartService: CartService, 
    private toastrservice: ToastrService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

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

  onUpdate(form: HTMLInputElement) {
    
    this.cartService.update(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Cart', 'Updated');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
