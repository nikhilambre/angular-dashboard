import { CartEditComponent } from './cart-edit.component';
import { CartViewComponent } from './cart-view.component';
import { CartComponent } from './cart.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ':id', component: CartComponent },
  { path: 'view/:id', component: CartViewComponent },
  { path: 'edit/:id', component: CartEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
