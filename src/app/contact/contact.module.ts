import { SocialListComponent } from './social-list.component';
import { SocialEditComponent } from './social-edit.component';
import { SocialComponent } from './social.component';
import { IframeComponent } from './iframe.component';
import { AddressEditComponent } from './address-edit.component';
import { AddressListComponent } from './address-list.component';
import { AddressComponent } from './address.component';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule
  ],
  exports:[],
  declarations: [
    AddressComponent,
    AddressListComponent,
    AddressEditComponent,
    IframeComponent,
    SocialComponent,
    SocialEditComponent,
    SocialListComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class ContactModule { }
