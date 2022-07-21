import { FormsModule } from '@angular/Forms';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { DataTablesModule } from 'angular-datatables';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { LikeRoutingModule } from 'app/like/like-routing.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './like.component';

@NgModule({
  imports: [
    CommonModule,
    LikeRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    LikeComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class LikeModule { }
