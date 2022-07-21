import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUserdataComponent } from './order-userdata.component';

describe('OrderUserdataComponent', () => {
  let component: OrderUserdataComponent;
  let fixture: ComponentFixture<OrderUserdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderUserdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderUserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
