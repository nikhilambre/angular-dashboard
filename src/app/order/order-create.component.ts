import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ToastrService } from './../services/toastr.service';
import { OrderService, Order } from './order.service';
import { Component, OnInit, ViewContainerRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  providers: [
    OrderService,
    ToastrService
  ]
})
export class OrderCreateComponent implements OnInit {

  order: Order[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Order",
    subHeader : "Create Order",
    activePage : "Order",
  }];

  constructor(
    private orderservice: OrderService, 
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef,
    private elem: ElementRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onCreate(form: HTMLInputElement) {
    this.orderservice.create(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Order', 'Created');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastrservice.showError(error.originalError.statusText);
          }
          else throw error;
        });
  }

}
