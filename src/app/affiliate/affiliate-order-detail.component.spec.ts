import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateOrderDetailComponent } from './affiliate-order-detail.component';

describe('AffiliateOrderDetailComponent', () => {
  let component: AffiliateOrderDetailComponent;
  let fixture: ComponentFixture<AffiliateOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
