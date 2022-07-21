import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionMapMapComponent } from './product-option-map-map.component';

describe('ProductOptionMapMapComponent', () => {
  let component: ProductOptionMapMapComponent;
  let fixture: ComponentFixture<ProductOptionMapMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionMapMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionMapMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
