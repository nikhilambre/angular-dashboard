import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceEditComponent } from './product-price-edit.component';

describe('ProductPriceEditComponent', () => {
  let component: ProductPriceEditComponent;
  let fixture: ComponentFixture<ProductPriceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPriceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
