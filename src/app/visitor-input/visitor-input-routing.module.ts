import { MessageViewComponent } from './message-view.component';
import { MessageComponent } from './message.component';
import { EnquiryViewComponent } from './enquiry-view.component';
import { EnquiryComponent } from './enquiry.component';

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'messages', pathMatch: 'full' },
  { path: 'messages', component: MessageComponent },
  { path: 'messages/view/:id', component: MessageViewComponent },
  { path: 'enquiry', component: EnquiryComponent },
  { path: 'enquiry/view/:id', component: EnquiryViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorInputRoutingModule {}