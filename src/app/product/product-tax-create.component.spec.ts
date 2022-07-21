import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTaxCreateComponent } from './product-tax-create.component';

describe('ProductTaxCreateComponent', () => {
  let component: ProductTaxCreateComponent;
  let fixture: ComponentFixture<ProductTaxCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTaxCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTaxCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
