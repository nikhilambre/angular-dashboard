import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { OrderService, Order } from './order.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  providers: [
    ToastrService,
    OrderService
  ]
})
export class OrderComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  order: Order[];

  pageHeaders: any[] = [{
    header : "Order",
    subHeader : "Order List",
    activePage : "Orders",
  }];

  constructor(    
    private orderservice: OrderService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
    this.orderservice.getAll()
    .subscribe(
      response => {
        this.order = response.data;
        this.dtTrigger.next();
      });
  }

}
