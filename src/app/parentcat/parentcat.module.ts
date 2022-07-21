import { ParentcatRoutingModule } from './parentcat-routing.module';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { ParentcatViewComponent } from './parentcat-view.component';
import { ParentcatEditComponent } from './parentcat-edit.component';
import { ParentcatCreateComponent } from './parentcat-create.component';
import { ParentcatComponent } from './parentcat.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ParentcatRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    ParentcatComponent,
    ParentcatCreateComponent,
    ParentcatEditComponent,
    ParentcatViewComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class ParentcatModule { }
