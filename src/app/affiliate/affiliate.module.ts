import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { AffiliateOrderDetailComponent } from './affiliate-order-detail.component';
import { AffiliateOrderListComponent } from './affiliate-order-list.component';
import { AffiliateViewComponent } from './affiliate-view.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { AffiliateRoutingModule } from './affiliate-routing.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliateComponent } from './affiliate.component';

@NgModule({
  imports: [
    CommonModule,
    AffiliateRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    AffiliateComponent,
    AffiliateViewComponent,
    AffiliateOrderListComponent,
    AffiliateOrderDetailComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class AffiliateModule { }
