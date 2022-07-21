import { LikeComponent } from './like.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LikeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikeRoutingModule {}