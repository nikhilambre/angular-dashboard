import { TestBed, inject } from '@angular/core/testing';

import { ProductOptionService } from './product-option.service';

describe('ProductOptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductOptionService]
    });
  });

  it('should be created', inject([ProductOptionService], (service: ProductOptionService) => {
    expect(service).toBeTruthy();
  }));
});
