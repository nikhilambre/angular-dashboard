import { PostViewComponent } from './post-view.component';
import { PostEditComponent } from './post-edit.component';
import { PostCreateComponent } from './post-create.component';
import { PostComponent } from './post.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:id', component: PostEditComponent },
  { path: 'view/:id', component: PostViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {}