import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { CouponService, Coupon } from './coupon.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  providers: [
    ToastrService,
    CouponService
  ]
})
export class CouponComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  coupon: Coupon[];
  process: boolean = false;
  
  pageHeaders: any[] = [{
    header : "Coupon",
    subHeader : "Coupon List",
    activePage : "Coupons",
  }];

  constructor(
    private couponservice: CouponService,
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
    this.couponservice.getAll()
    .subscribe(
      response => {
        this.coupon = response.data;
        this.dtTrigger.next();
      });
  }

  onDelete(coupon) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {
      
      this.process = true;
      this.couponservice.delete(coupon.id)
      .subscribe(
        response => {
          this.process = false;
          let index = this.coupon.indexOf(coupon);
          this.coupon.splice(index, 1);
          this.toastrservice.showInfo('Coupon', 'Deleted');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
    }

  }

}
