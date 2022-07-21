import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionMapCreateComponent } from './product-option-map-create.component';

describe('ProductOptionMapCreateComponent', () => {
  let component: ProductOptionMapCreateComponent;
  let fixture: ComponentFixture<ProductOptionMapCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionMapCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionMapCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
