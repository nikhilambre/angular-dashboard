import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionMapEditComponent } from './product-option-map-edit.component';

describe('ProductOptionMapEditComponent', () => {
  let component: ProductOptionMapEditComponent;
  let fixture: ComponentFixture<ProductOptionMapEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionMapEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionMapEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
