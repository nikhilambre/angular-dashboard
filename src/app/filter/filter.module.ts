import { FilterViewComponent } from './filter-view.component';
import { FilterEditComponent } from './filter-edit.component';
import { FilterComponent } from './filter.component';
import { FilterRoutingModule } from './filter-routing.module';
import { FilterCreateComponent } from './filter-create.component';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    FilterRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    FilterComponent,
    FilterCreateComponent,
    FilterEditComponent,
    FilterViewComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class FilterModule { }
