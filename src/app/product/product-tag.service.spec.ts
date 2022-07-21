import { TestBed, inject } from '@angular/core/testing';

import { ProductTagService } from './product-tag.service';

describe('ProductTagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductTagService]
    });
  });

  it('should be created', inject([ProductTagService], (service: ProductTagService) => {
    expect(service).toBeTruthy();
  }));
});
