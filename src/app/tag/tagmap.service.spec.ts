import { TestBed, inject } from '@angular/core/testing';

import { TagmapService } from './tagmap.service';

describe('TagmapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagmapService]
    });
  });

  it('should be created', inject([TagmapService], (service: TagmapService) => {
    expect(service).toBeTruthy();
  }));
});
