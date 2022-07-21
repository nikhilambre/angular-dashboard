import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceMapComponent } from './product-price-map.component';

describe('ProductPriceMapComponent', () => {
  let component: ProductPriceMapComponent;
  let fixture: ComponentFixture<ProductPriceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPriceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
