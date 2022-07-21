import { HelpViewComponent } from './help-view.component';
import { HelpEditComponent } from './help-edit.component';
import { HelpComponent } from './help.component';
import { HelpCreateComponent } from './help-create.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: HelpComponent },
    { path: 'create', component: HelpCreateComponent },
    { path: 'edit/:id', component: HelpEditComponent },
    { path: 'view/:id', component: HelpViewComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HelpRoutingModule {}