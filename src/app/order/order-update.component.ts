import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from './../services/toastr.service';
import { OrderService, Order } from './order.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  providers: [
    ToastrService,
    OrderService
  ]
})
export class OrderUpdateComponent implements OnInit {

  order: Order[];

  linkId: any[] = [{
    id : "",
    name : "update",
  }];
  
  pageHeaders: any[] = [{
    header : "Order",
    subHeader : "Order Update",
    activePage : "Orders",
  }];

  constructor(
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

      this.orderservice.getOne(id)
        .subscribe(
          response => {
            this.order = response.data;
          });

    });
  }

  onUpdate(form: HTMLInputElement) {
    
    this.orderservice.update(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Order', 'Updated');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastr.error('Something went wrong, Refresh and try again!', 'Oops!');
          }
          else throw error;
        });
  }

}
