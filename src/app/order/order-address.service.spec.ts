import { TestBed, inject } from '@angular/core/testing';

import { OrderAddressService } from './order-address.service';

describe('OrderAddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderAddressService]
    });
  });

  it('should be created', inject([OrderAddressService], (service: OrderAddressService) => {
    expect(service).toBeTruthy();
  }));
});
