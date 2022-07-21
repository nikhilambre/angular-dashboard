import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionTypeCreateComponent } from './product-option-type-create.component';

describe('ProductOptionTypeCreateComponent', () => {
  let component: ProductOptionTypeCreateComponent;
  let fixture: ComponentFixture<ProductOptionTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
