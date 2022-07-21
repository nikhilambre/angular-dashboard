import { TestBed, inject } from '@angular/core/testing';

import { ProductTagmapService } from './product-tagmap.service';

describe('ProductTagmapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductTagmapService]
    });
  });

  it('should be created', inject([ProductTagmapService], (service: ProductTagmapService) => {
    expect(service).toBeTruthy();
  }));
});
