import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { SupportCreateComponent } from './support-create.component';
import { SupportEditComponent } from './support-edit.component';
import { SupportViewComponent } from './support-view.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { SupportRoutingModule } from './support-routing.Module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';

@NgModule({
  imports: [
    CommonModule,
    SupportRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    SupportComponent,
    SupportViewComponent,
    SupportEditComponent,
    SupportCreateComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class SupportModule { }
