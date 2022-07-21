import { TagEditComponent } from './tag-edit.component';
import { TagCreateComponent } from './tag-create.component';


import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: TagCreateComponent },
  { path: 'edit/:id', component: TagEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagRoutingModule {}