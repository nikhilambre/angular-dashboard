import { OrderCreateComponent } from './order-create.component';
import { OrderUserdataComponent } from './order-userdata.component';
import { OrderCallComponent } from './order-call.component';
import { OrderUpdateComponent } from './order-update.component';
import { OrderDetailComponent } from './order-detail.component';
import { OrderDataComponent } from './order-data.component';
import { OrderCommentComponent } from './order-comment.component';
import { OrderAddressComponent } from './order-address.component';
import { OrderComponent } from './order.component';


import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: OrderComponent },
  { path: 'create', component: OrderCreateComponent },
  { path: 'detail/:id', component: OrderDetailComponent },
  { path: 'address/:id', component: OrderAddressComponent },
  { path: 'data/:id', component: OrderDataComponent },
  { path: 'comment/:id', component: OrderCommentComponent },
  { path: 'update/:id', component: OrderUpdateComponent },
  { path: 'call/:id', component: OrderCallComponent },
  { path: 'userdata/:id', component: OrderUserdataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}