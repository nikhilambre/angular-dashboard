import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionMapComponent } from './product-option-map.component';

describe('ProductOptionMapComponent', () => {
  let component: ProductOptionMapComponent;
  let fixture: ComponentFixture<ProductOptionMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
