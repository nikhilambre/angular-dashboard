import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionEditComponent } from './product-option-edit.component';

describe('ProductOptionEditComponent', () => {
  let component: ProductOptionEditComponent;
  let fixture: ComponentFixture<ProductOptionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
