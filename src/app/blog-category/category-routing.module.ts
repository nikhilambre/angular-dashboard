import { CategoryViewComponent } from './category-view.component';
import { CategoryEditComponent } from './category-edit.component';
import { CategoryCreateComponent } from './category-create.component';
import { CategoryComponent } from './category.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'create', component: CategoryCreateComponent },
  { path: 'edit/:id', component: CategoryEditComponent },
  { path: 'view/:id', component: CategoryViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}