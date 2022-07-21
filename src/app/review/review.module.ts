import { ReviewViewComponent } from './review-view.component';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { ReviewRoutingModule } from './review-routing.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review.component';

@NgModule({
  imports: [
    CommonModule,
    ReviewRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    ReviewComponent,
    ReviewViewComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class ReviewModule { }
