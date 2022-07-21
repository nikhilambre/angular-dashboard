import { CommentViewComponent } from './comment-view.component';
import { CommentTabComponent } from './comment-tab.component';
import { CommentPendingComponent } from './comment-pending.component';
import { CommentRejectComponent } from './comment-reject.component';
import { CommentComponent } from './comment.component';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { SharedModule } from './../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/Forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { CommentRoutingModule } from 'app/comment/comment-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CommentRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    CommentComponent,
    CommentRejectComponent,
    CommentPendingComponent,
    CommentTabComponent,
    CommentViewComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class CommentModule { }
