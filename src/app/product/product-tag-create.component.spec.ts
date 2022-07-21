import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTagCreateComponent } from './product-tag-create.component';

describe('ProductTagCreateComponent', () => {
  let component: ProductTagCreateComponent;
  let fixture: ComponentFixture<ProductTagCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTagCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTagCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
