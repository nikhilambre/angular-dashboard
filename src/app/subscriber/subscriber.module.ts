import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { SubscriberRoutingModule } from './subscriber-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { SubscriberComponent } from './subscriber.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SubscriberRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  declarations: [
    SubscriberComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class SubscriberModule { }
