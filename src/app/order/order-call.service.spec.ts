import { TestBed, inject } from '@angular/core/testing';

import { OrderCallService } from './order-call.service';

describe('OrderCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderCallService]
    });
  });

  it('should be created', inject([OrderCallService], (service: OrderCallService) => {
    expect(service).toBeTruthy();
  }));
});
