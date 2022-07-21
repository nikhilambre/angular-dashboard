import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionTypeComponent } from './product-option-type.component';

describe('ProductOptionTypeComponent', () => {
  let component: ProductOptionTypeComponent;
  let fixture: ComponentFixture<ProductOptionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
