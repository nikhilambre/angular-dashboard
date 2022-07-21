import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTaxComponent } from './product-tax.component';

describe('ProductTaxComponent', () => {
  let component: ProductTaxComponent;
  let fixture: ComponentFixture<ProductTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
