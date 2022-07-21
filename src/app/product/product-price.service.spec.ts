import { TestBed, inject } from '@angular/core/testing';

import { ProductPriceService } from './product-price.service';

describe('ProductPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductPriceService]
    });
  });

  it('should be created', inject([ProductPriceService], (service: ProductPriceService) => {
    expect(service).toBeTruthy();
  }));
});
