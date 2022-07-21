import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { AddressService } from './address.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  providers: [
    AddressService,
    ToastrService
  ]
})
export class AddressComponent implements OnInit {

  pageHeaders: any[] = [{
    header : "Contact",
    subHeader : "Postal Address Create",
    activePage : "Site Management",
  }];

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  constructor(
    private addressservice: AddressService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
  }

  onCreate(form: HTMLInputElement) {
    this.addressservice.create(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Address', 'Created');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastrservice.showError(error.originalError.statusText);
          }
          else throw error;
        });
  }

}
