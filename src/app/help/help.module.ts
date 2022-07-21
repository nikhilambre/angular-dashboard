import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { HelpRoutingModule } from './help-routing.module';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { HelpViewComponent } from './help-view.component';
import { HelpEditComponent } from './help-edit.component';
import { HelpCreateComponent } from './help-create.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';

@NgModule({
  imports: [
    CommonModule,
    HelpRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    HelpComponent,
    HelpCreateComponent,
    HelpEditComponent,
    HelpViewComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class HelpModule { }
