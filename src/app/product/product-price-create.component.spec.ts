import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceCreateComponent } from './product-price-create.component';

describe('ProductPriceCreateComponent', () => {
  let component: ProductPriceCreateComponent;
  let fixture: ComponentFixture<ProductPriceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPriceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
