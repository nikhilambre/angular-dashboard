import { ParentcatViewComponent } from './parentcat-view.component';
import { ParentcatEditComponent } from './parentcat-edit.component';
import { ParentcatCreateComponent } from './parentcat-create.component';
import { ParentcatComponent } from './parentcat.component';


import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ParentcatComponent },
  { path: 'create', component: ParentcatCreateComponent },
  { path: 'edit/:id', component: ParentcatEditComponent },
  { path: 'view/:id', component: ParentcatViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentcatRoutingModule {}