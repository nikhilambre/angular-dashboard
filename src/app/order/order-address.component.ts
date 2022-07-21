import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderAddressService, Orderaddress } from './order-address.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-order-address',
  templateUrl: './order-address.component.html',
  providers: [
    OrderAddressService
  ]
})
export class OrderAddressComponent implements OnInit {

  orderaddress: Orderaddress[];

  linkId: any[] = [{
    id : "",
    name : "address",
  }];
  
  pageHeaders: any[] = [{
    header : "Order",
    subHeader : "Order Details",
    activePage : "Orders",
  }];

  constructor(
    private orderaddressservice: OrderAddressService,
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

      this.orderaddressservice.getOne(id)
        .subscribe(
          response => {
            this.orderaddress = response.data;
          });
    });
  }

}
