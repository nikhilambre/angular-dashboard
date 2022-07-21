import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { AddressService, Address } from './address.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  providers: [
    ToastrService,
    AddressService
  ]
})
export class AddressListComponent implements OnInit {

  address: Address[];
  constructor(private addressservice: AddressService,
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
    this.addressservice.getAll()
      .subscribe(
        response => {
          this.address = response.data;
        });
  }

  onDelete(address) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.addressservice.delete(address.id)
      .subscribe(
        response => {
          let index = this.address.indexOf(address);
          this.address.splice(index, 1);
          this.toastrservice.showInfo('Address', 'Deleted');
        }, 
        (error: AppError) => {
          if (error instanceof NotFoundError)
            this.toastrservice.showError(error.originalError.statusText);
          else throw error;
        });
      }
  }

}
