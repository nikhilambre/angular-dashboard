import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorViewComponent } from './author-view.component';
import { AuthorEditComponent } from './author-edit.component';
import { AuthorCreateComponent } from './author-create.component';
import { AuthorComponent } from './author.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    AuthorComponent,
    AuthorCreateComponent,
    AuthorEditComponent,
    AuthorViewComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class AuthorModule { }
