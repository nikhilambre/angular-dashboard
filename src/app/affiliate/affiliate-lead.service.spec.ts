import { TestBed, inject } from '@angular/core/testing';

import { AffiliateLeadService } from './affiliate-lead.service';

describe('AffiliateLeadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AffiliateLeadService]
    });
  });

  it('should be created', inject([AffiliateLeadService], (service: AffiliateLeadService) => {
    expect(service).toBeTruthy();
  }));
});
