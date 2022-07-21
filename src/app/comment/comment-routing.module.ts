import { CommentViewComponent } from 'app/comment/comment-view.component';
import { CommentComponent } from 'app/comment/comment.component';
import { CommentRejectComponent } from 'app/comment/comment-reject.component';
import { CommentPendingComponent } from 'app/comment/comment-pending.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CommentComponent },
  { path: 'pending', component: CommentPendingComponent },
  { path: 'rejected', component: CommentRejectComponent },
  { path: 'view/:id', component: CommentViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {}