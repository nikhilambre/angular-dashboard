import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { AddressService, Address } from './address.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  providers: [
    AddressService,
    ToastrService
  ]
})
export class AddressEditComponent implements OnInit {

  address: Address[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Contact",
    subHeader : "Postal Address Edit",
    activePage : "Site Management",
  }];

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  constructor(
    private addressservice: AddressService, 
    private toastrservice: ToastrService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.addressservice.getOne(id)
        .subscribe(
          response => {
            this.address = response.data;
          });
    });
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    this.addressservice.update(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Address', 'Updated');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
