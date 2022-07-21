import { PageupdatorEditComponent } from './pageupdator-edit.component';
import { PageupdatorCreateComponent } from './pageupdator-create.component';
import { PageupdatorComponent } from './pageupdator.component';


import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: PageupdatorComponent },
  //{ path: 'create', component: PageupdatorCreateComponent },
  { path: 'edit/:id', component: PageupdatorEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageupdatorRoutingModule {}