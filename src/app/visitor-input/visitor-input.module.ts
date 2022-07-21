import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { VisitorInputRoutingModule } from './visitor-input-routing.module';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { MessageViewComponent } from './message-view.component';
import { MessageComponent } from './message.component';

import { EnquiryViewComponent } from './enquiry-view.component';
import { EnquiryComponent } from './enquiry.component';

@NgModule({
  imports: [
    CommonModule,
    VisitorInputRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports: [],
  declarations: [
    EnquiryComponent,
    EnquiryViewComponent,
    MessageComponent,
    MessageViewComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class VisitorInputModule { }
