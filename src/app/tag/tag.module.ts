import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { TagRoutingModule } from './tag-routing.module';
import { TagMapComponent } from './tag-map.component';
import { TagEditComponent } from './tag-edit.component';
import { TagCreateComponent } from './tag-create.component';
import { TagListComponent } from './tag-list.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    TagRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    TagListComponent,
    TagCreateComponent,
    TagEditComponent,
    TagMapComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class TagModule { }
