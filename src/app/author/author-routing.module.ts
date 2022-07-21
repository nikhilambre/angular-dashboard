import { AuthorViewComponent } from './author-view.component';
import { AuthorEditComponent } from './author-edit.component';
import { AuthorCreateComponent } from './author-create.component';
import { AuthorComponent } from './author.component';



import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: AuthorComponent },
  { path: 'create', component: AuthorCreateComponent },
  { path: 'edit/:id', component: AuthorEditComponent },
  { path: 'view/:id', component: AuthorViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule {}