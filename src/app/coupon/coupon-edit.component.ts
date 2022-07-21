import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from './../services/toastr.service';
import { CouponService, Coupon } from './coupon.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-coupon-edit',
  templateUrl: './coupon-edit.component.html',
  providers: [
    ToastrService,
    CouponService
  ]
})
export class CouponEditComponent implements OnInit {

  coupon: Coupon[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Coupon",
    subHeader : "Coupon Edit",
    activePage : "Coupons",
  }];

  constructor(
    private couponservice: CouponService,
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

      this.couponservice.getOne(id)
        .subscribe(
          response => {
            this.coupon = response.data;
          });
    });
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    this.couponservice.update(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Coupon', 'Updated');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
