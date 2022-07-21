import { ProductTaxEditComponent } from './product-tax-edit.component';
import { ProductTaxCreateComponent } from './product-tax-create.component';
import { ProductTaxComponent } from './product-tax.component';
import { ProductTagListComponent } from './product-tag-list.component';
import { ProductTagCreateComponent } from './product-tag-create.component';
import { ProductTagComponent } from './product-tag.component';

import { ProductOptionMapMapComponent } from './product-option-map-map.component';
import { ProductOptionMapCreateComponent } from './product-option-map-create.component';
import { ProductOptionMapEditComponent } from './product-option-map-edit.component';
import { ProductOptionMapComponent } from './product-option-map.component';

import { ProductOptionTypeCreateComponent } from './product-option-type-create.component';
import { ProductOptionTypeComponent } from './product-option-type.component';
import { ProductOptionTypeEditComponent } from './product-option-type-edit.component';

import { ProductOptionEditComponent } from './product-option-edit.component';
import { ProductOptionCreateComponent } from './product-option-create.component';
import { ProductOptionComponent } from './product-option.component';

import { ProductPriceMapComponent } from './product-price-map.component';
import { ProductPriceViewComponent } from './product-price-view.component';
import { ProductPriceEditComponent } from './product-price-edit.component';
import { ProductPriceComponent } from './product-price.component';
import { ProductPriceCreateComponent } from './product-price-create.component';

import { ProductViewComponent } from './product-view.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductCreateComponent } from './product-create.component';
import { ProductComponent } from './product.component';

import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
  ],
  exports: [],
  declarations: [
    ProductComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductViewComponent,
    ProductPriceCreateComponent,
    ProductPriceComponent,
    ProductPriceEditComponent,
    ProductPriceViewComponent,
    ProductPriceMapComponent,
    ProductOptionComponent,
    ProductOptionCreateComponent,
    ProductOptionTypeCreateComponent,
    ProductOptionMapCreateComponent,
    ProductOptionMapEditComponent,
    ProductOptionMapComponent,
    ProductOptionEditComponent,
    ProductOptionTypeEditComponent,
    ProductOptionTypeComponent,
    ProductOptionMapMapComponent,
    ProductTagComponent,
    ProductTagCreateComponent,
    ProductTagListComponent,
    ProductTaxComponent,
    ProductTaxCreateComponent,
    ProductTaxEditComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class ProductModule { }
