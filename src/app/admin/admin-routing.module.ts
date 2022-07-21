import { AdminComponent } from './admin.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { AdminCreateComponent } from 'app/admin/admin-create.component';


const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'create', component: AdminCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}