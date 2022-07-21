import { OrderCreateComponent } from './order-create.component';
import { OrderUserdataComponent } from './order-userdata.component';
import { OrderCallComponent } from './order-call.component';
import { OrderUpdateComponent } from './order-update.component';
import { OrderTabsComponent } from './order-tabs.component';
import { AppErrorHandler } from '../shared/errorlibrary/app-error-handler';
import { OrderAddressComponent } from './order-address.component';
import { OrderCommentComponent } from './order-comment.component';
import { OrderDataComponent } from './order-data.component';
import { OrderDetailComponent } from './order-detail.component';
import { OrderComponent } from './order.component';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    OrderComponent,
    OrderDetailComponent,
    OrderDataComponent,
    OrderCommentComponent,
    OrderAddressComponent,
    OrderTabsComponent,
    OrderUpdateComponent,
    OrderCallComponent,
    OrderUserdataComponent,
    OrderCreateComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class OrderModule { }
