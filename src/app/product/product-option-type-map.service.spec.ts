import { TestBed, inject } from '@angular/core/testing';

import { ProductOptionTypeMapService } from './product-option-type-map.service';

describe('ProductOptionTypeMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductOptionTypeMapService]
    });
  });

  it('should be created', inject([ProductOptionTypeMapService], (service: ProductOptionTypeMapService) => {
    expect(service).toBeTruthy();
  }));
});
