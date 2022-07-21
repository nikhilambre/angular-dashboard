import { FilterViewComponent } from './filter-view.component';
import { FilterEditComponent } from './filter-edit.component';
import { FilterCreateComponent } from './filter-create.component';
import { FilterComponent } from './filter.component';


import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: FilterComponent },
  { path: 'create', component: FilterCreateComponent },
  { path: 'edit/:id', component: FilterEditComponent },
  // { path: 'view/:id', component: FilterViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterRoutingModule {}