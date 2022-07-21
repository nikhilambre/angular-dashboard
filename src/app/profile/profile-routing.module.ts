import { ProfileEditComponent } from './profile-edit.component';
import { ProfileComponent } from './profile.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ProfileComponent },
  // { path: 'create', component: FilterCreateComponent },
  { path: 'edit', component: ProfileEditComponent },
  // { path: 'view/:id', component: FilterViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}