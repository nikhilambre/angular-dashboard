import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTaxEditComponent } from './product-tax-edit.component';

describe('ProductTaxEditComponent', () => {
  let component: ProductTaxEditComponent;
  let fixture: ComponentFixture<ProductTaxEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTaxEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTaxEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
