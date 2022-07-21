import { CategoryViewComponent } from './category-view.component';
import { CategoryEditComponent } from './category-edit.component';
import { CategoryCreateComponent } from './category-create.component';
import { CategoryComponent } from './category.component';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/Forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    CategoryComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryViewComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class CategoryModule { }
