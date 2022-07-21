import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminCreateComponent } from './admin-create.component';
import { AdminService } from './admin.service';
import { AdminComponent } from './admin.component';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports: [],
  declarations: [
    AdminComponent,
    AdminCreateComponent
  ],
  providers: [
    AdminService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
})
export class AdminModule { }
