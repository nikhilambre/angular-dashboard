import { PostRoutingModule } from './post-routing.module';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { PostViewComponent } from './post-view.component';
import { PostEditComponent } from './post-edit.component';
import { PostCreateComponent } from './post-create.component';
import { PostComponent } from './post.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    PostComponent,
    PostCreateComponent,
    PostEditComponent,
    PostViewComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class PostModule { }
