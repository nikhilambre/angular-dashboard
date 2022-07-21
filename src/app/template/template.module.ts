import { TemplateRoutingModule } from './template-routing.module';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { TemplateViewComponent } from './template-view.component';
import { TemplateEditComponent } from './template-edit.component';
import { TemplateCreateComponent } from './template-create.component';
import { TemplateComponent } from './template.component';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    TemplateComponent,
    TemplateCreateComponent,
    TemplateEditComponent,
    TemplateViewComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class TemplateModule { }
