import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from './../services/toastr.service';
import { OrderDataService, Orderdata } from './order-data.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  providers: [
    ToastrService,
    OrderDataService
  ]
})
export class OrderDataComponent implements OnInit {

  orderdata: Orderdata[];
  
  linkId: any[] = [{
    id : "",
    name : "data",
  }];
  
  pageHeaders: any[] = [{
    header : "Order",
    subHeader : "Order Components",
    activePage : "Orders",
  }];

  constructor(
    private orderdataservice: OrderDataService,
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

      this.orderdataservice.getOne(id)
        .subscribe(
          response => {
            this.orderdata = response.data;
          });
    });
  }

}
