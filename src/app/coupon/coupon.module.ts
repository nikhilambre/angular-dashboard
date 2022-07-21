import { CouponCreateComponent } from './coupon-create.component';
import { SharedModule } from './../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/Forms';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';
import { CouponComponent } from './coupon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponRoutingModule } from './coupon-routing.module';
import { CouponEditComponent } from './coupon-edit.component';

@NgModule({
  imports: [
    CommonModule,
    CouponRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    CouponComponent,
    CouponCreateComponent,
    CouponEditComponent
  ]
})
export class CouponModule { }
