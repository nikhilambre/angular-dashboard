import { SeoViewComponent } from './seo-view.component';
import { SeoEditComponent } from './seo-edit.component';
import { SeoCreateComponent } from './seo-create.component';
import { SeoComponent } from './seo.component';


import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: SeoComponent },
  { path: 'create', component: SeoCreateComponent },
  { path: 'edit/:id', component: SeoEditComponent },
  { path: 'view/:id', component: SeoViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeoRoutingModule {}