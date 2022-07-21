import { ProductTaxComponent } from './product-tax.component';
import { ProductTaxCreateComponent } from './product-tax-create.component';
import { ProductTaxEditComponent } from './product-tax-edit.component';
import { ProductTagComponent } from './product-tag.component';
import { ProductOptionMapMapComponent } from './product-option-map-map.component';
import { ProductOptionMapEditComponent } from './product-option-map-edit.component';
import { ProductOptionMapCreateComponent } from './product-option-map-create.component';
import { ProductOptionMapComponent } from './product-option-map.component';
import { ProductOptionTypeCreateComponent } from './product-option-type-create.component';
import { ProductOptionCreateComponent } from './product-option-create.component';
import { ProductOptionTypeComponent } from './product-option-type.component';
import { ProductOptionTypeEditComponent } from './product-option-type-edit.component';
import { ProductOptionEditComponent } from './product-option-edit.component';
import { ProductOptionComponent } from './product-option.component';
import { ProductPriceMapComponent } from './product-price-map.component';
import { ProductPriceViewComponent } from './product-price-view.component';
import { ProductPriceEditComponent } from './product-price-edit.component';
import { ProductPriceCreateComponent } from './product-price-create.component';
import { ProductPriceComponent } from './product-price.component';
import { ProductViewComponent } from './product-view.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductCreateComponent } from './product-create.component';
import { ProductComponent } from './product.component';
import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'create', component: ProductCreateComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'view/:id', component: ProductViewComponent },

  { path: 'price/create', component: ProductPriceCreateComponent },
  { path: 'price/edit/:id', component: ProductPriceEditComponent },
  { path: 'price/view/:id', component: ProductPriceViewComponent },
  { path: 'price/:id', component: ProductPriceMapComponent },
  { path: 'price', component: ProductPriceComponent },

  { path: 'option/edit/:id', component: ProductOptionEditComponent },
  { path: 'option/create', component: ProductOptionCreateComponent },
  { path: 'option', component: ProductOptionComponent },

  { path: 'optiontype/edit/:id', component: ProductOptionTypeEditComponent },
  { path: 'optiontype/create', component: ProductOptionTypeCreateComponent },
  { path: 'optiontype', component: ProductOptionTypeComponent },

  { path: 'optionmap/edit/:id', component: ProductOptionMapEditComponent },
  { path: 'optionmap/create', component: ProductOptionMapCreateComponent },
  { path: 'optionmap/:id', component: ProductOptionMapMapComponent },
  { path: 'optionmap', component: ProductOptionMapComponent },

  { path: 'tax/edit/:id', component: ProductTaxEditComponent },
  { path: 'tax/create', component: ProductTaxCreateComponent },
  { path: 'tax', component: ProductTaxComponent },

  // { path: 'tag', component: ProductTagComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}