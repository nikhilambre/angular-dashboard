import { ReviewViewComponent } from './review-view.component';
import { ReviewComponent } from './review.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ReviewComponent },
  { path: 'view/:id', component: ReviewViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule {}