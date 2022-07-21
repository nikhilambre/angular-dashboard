import { ToastrService } from './../services/toastr.service';
import { OrderService, Order } from './order.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  providers: [
    ToastrService,
    OrderService
  ]
})
export class OrderDetailComponent implements OnInit {

  order: Order[];
  
  linkId: any[] = [{
    id : "",
    name : "detail",
  }];
  
  pageHeaders: any[] = [{
    header : "Order",
    subHeader : "Order Details",
    activePage : "Orders",
  }];

  constructor(
    private orderservice: OrderService,
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

}
