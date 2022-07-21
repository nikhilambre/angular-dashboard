import { TestBed, inject } from '@angular/core/testing';

import { ProductOptionTypeService } from './product-option-type.service';

describe('ProductOptionTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductOptionTypeService]
    });
  });

  it('should be created', inject([ProductOptionTypeService], (service: ProductOptionTypeService) => {
    expect(service).toBeTruthy();
  }));
});
