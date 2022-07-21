import { TestBed, inject } from '@angular/core/testing';

import { ProductTaxService } from './product-tax.service';

describe('ProductTaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductTaxService]
    });
  });

  it('should be created', inject([ProductTaxService], (service: ProductTaxService) => {
    expect(service).toBeTruthy();
  }));
});
