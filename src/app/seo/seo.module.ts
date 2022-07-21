import { SeoRoutingModule } from './seo-routing.module';
import { SeoViewComponent } from './seo-view.component';
import { SeoEditComponent } from './seo-edit.component';
import { SeoCreateComponent } from './seo-create.component';
import { SeoComponent } from './seo.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SeoRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    SeoComponent,
    SeoCreateComponent,
    SeoEditComponent,
    SeoViewComponent,
  ]
})
export class SeoModule { }
