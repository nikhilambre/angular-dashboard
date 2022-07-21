import { SupportViewComponent } from './support-view.component';
import { SupportEditComponent } from './support-edit.component';
import { SupportCreateComponent } from './support-create.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { SupportComponent } from './support.component';


const routes: Routes = [
  { path: '', component: SupportComponent },
  { path: 'create', component: SupportCreateComponent },
  { path: 'edit/:id', component: SupportEditComponent },
  { path: 'view/:id', component: SupportViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule {}