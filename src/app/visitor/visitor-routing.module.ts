import { VisitorViewComponent } from './visitor-view.component';
import { VisitorComponent } from './visitor.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: VisitorComponent },
  { path: 'view/:id', component: VisitorViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule {}