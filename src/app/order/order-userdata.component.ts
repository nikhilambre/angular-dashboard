import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from './../services/toastr.service';
import { UserdataService, Userdata } from './userdata.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-order-userdata',
  templateUrl: './order-userdata.component.html',
  providers: [
    ToastrService,
    UserdataService
  ]
})
export class OrderUserdataComponent implements OnInit {

  userdata: Userdata[];
  pageHeaders: any[] = [{
    header : "Order",
    subHeader : "Order User Data",
    activePage : "Orders",
  }];

  linkId: any[] = [{
    id : "",
    name : "data",
  }];
  process: boolean = false;

  constructor(
    private userdataservice: UserdataService,
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

      this.userdataservice.getOne(id)
        .subscribe(
          response => {
            this.userdata = response.data;
          });
    });
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    this.userdataservice.update(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('CLient Data', 'Updated');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
