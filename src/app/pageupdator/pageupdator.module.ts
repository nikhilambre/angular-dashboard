import { PageupdatorEditComponent } from './pageupdator-edit.component';
import { PageupdatorCreateComponent } from './pageupdator-create.component';
import { PageupdatorComponent } from './pageupdator.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { PageupdatorRoutingModule } from './pageupdator-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PageupdatorRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    PageupdatorComponent,
    PageupdatorCreateComponent,
    PageupdatorEditComponent
  ]
})
export class PageupdatorModule { }
