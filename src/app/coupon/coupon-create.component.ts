import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CouponService, Coupon } from './coupon.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-coupon-create',
  templateUrl: './coupon-create.component.html',
  providers: [
    ToastrService,
    CouponService
  ]
})
export class CouponCreateComponent implements OnInit {

  defaultStatus = 'ACTIVE';
  coupon: Coupon[] = [];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Coupon",
    subHeader : "Coupon Create",
    activePage : "Coupons",
  }];

  constructor(
    private couponservice: CouponService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onCreate(form: HTMLInputElement) {
    this.process = true;
    this.couponservice.create(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Coupon', 'Created');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }
}
