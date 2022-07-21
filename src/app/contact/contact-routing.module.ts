import { SocialEditComponent } from './social-edit.component';
import { SocialComponent } from './social.component';
import { IframeComponent } from './iframe.component';
import { AddressEditComponent } from './address-edit.component';
import { AddressComponent } from './address.component';
import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'address', pathMatch: 'full' },
  { path: 'address', component: AddressComponent },
  { path: 'address/edit/:id', component: AddressEditComponent },
  { path: 'social', component: SocialComponent },
  { path: 'social/edit/:id', component: SocialEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}