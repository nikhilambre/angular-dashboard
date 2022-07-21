import { AffiliateOrderDetailComponent } from './affiliate-order-detail.component';
import { AffiliateViewComponent } from './affiliate-view.component';
import { AffiliateOrderListComponent } from './affiliate-order-list.component';
import { AffiliateComponent } from './affiliate.component';


import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AffiliateComponent },
  { path: 'view/:id', component: AffiliateViewComponent },
  { path: 'order-list/:id', component: AffiliateOrderListComponent },
  { path: 'order-detail/:id', component: AffiliateOrderDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliateRoutingModule { }
