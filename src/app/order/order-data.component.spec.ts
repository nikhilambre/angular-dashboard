import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDataComponent } from './order-data.component';

describe('OrderDataComponent', () => {
  let component: OrderDataComponent;
  let fixture: ComponentFixture<OrderDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
