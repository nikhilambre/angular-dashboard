import { CouponEditComponent } from './coupon-edit.component';
import { CouponCreateComponent } from './coupon-create.component';
import { CouponComponent } from './coupon.component';
import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CouponComponent },
  { path: 'create', component: CouponCreateComponent },
  { path: 'edit/:id', component: CouponEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRoutingModule { }
