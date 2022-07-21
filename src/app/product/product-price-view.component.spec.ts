import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceViewComponent } from './product-price-view.component';

describe('ProductPriceViewComponent', () => {
  let component: ProductPriceViewComponent;
  let fixture: ComponentFixture<ProductPriceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPriceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
