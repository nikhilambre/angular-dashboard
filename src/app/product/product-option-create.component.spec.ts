import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionCreateComponent } from './product-option-create.component';

describe('ProductOptionCreateComponent', () => {
  let component: ProductOptionCreateComponent;
  let fixture: ComponentFixture<ProductOptionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
