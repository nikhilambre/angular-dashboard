import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionTypeEditComponent } from './product-option-type-edit.component';

describe('ProductOptionTypeEditComponent', () => {
  let component: ProductOptionTypeEditComponent;
  let fixture: ComponentFixture<ProductOptionTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
