import { TemplateCreateComponent } from './template-create.component';
import { TemplateEditComponent } from './template-edit.component';
import { TemplateViewComponent } from './template-view.component';
import { TemplateComponent } from './template.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: TemplateComponent },
  { path: 'create', component: TemplateCreateComponent },
  { path: 'edit/:id', component: TemplateEditComponent },
  { path: 'view/:id', component: TemplateViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
