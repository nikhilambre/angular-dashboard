import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderService, Order } from './order.service';
import { ToastrService } from './../services/toastr.service';
import { OrderCallService, Ordercall } from './order-call.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-order-call',
  templateUrl: './order-call.component.html',
  providers: [
    ToastrService,
    OrderCallService,
    OrderService
  ]
})
export class OrderCallComponent implements OnInit {

  ordercall: Ordercall[];
  order: Order[];
  oldCallStatus = '';
  
  linkId: any[] = [{
    id : "",
    name : "call",
  }];
  
  pageHeaders: any[] = [{
    header : "Order",
    subHeader : "Order Calls",
    activePage : "Orders",
  }];

  constructor(
    private ordercallservice: OrderCallService,
    private orderservice: OrderService,
    private toastrservice: ToastrService,
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
      this.linkId[0].id = id;

      this.ordercallservice.getOne(id)
        .subscribe(
          response => {
            this.ordercall = response.data;
            this.oldCallStatus = this.ordercall[0].callStatus;
          });

      this.orderservice.getOne(id)
        .subscribe(
          response => {
            this.order = response.data;
          });

    });
  }

  onUpdate(form: HTMLInputElement) {
    
    this.ordercallservice.update(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Order Call', 'Updated');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastr.error('Something went wrong, Refresh and try again!', 'Oops!');
          }
          else throw error;
        });
  }

}
