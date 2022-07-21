import { CartEditComponent } from './cart-edit.component';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartViewComponent } from './cart-view.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports:[],
  declarations: [
    CartComponent,
    CartViewComponent,
    CartEditComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class CartModule { }
