import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponEditComponent } from './coupon-edit.component';

describe('CouponEditComponent', () => {
  let component: CouponEditComponent;
  let fixture: ComponentFixture<CouponEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
