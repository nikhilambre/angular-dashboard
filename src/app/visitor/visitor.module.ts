import { VisitorViewComponent } from './visitor-view.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { VisitorRoutingModule } from './visitor-routing.module';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { VisitorComponent } from './visitor.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    VisitorRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  declarations: [
    VisitorComponent,
    VisitorViewComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class VisitorModule { }
