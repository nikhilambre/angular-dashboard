import { TestBed, inject } from '@angular/core/testing';

import { PageupdatorService } from './pageupdator.service';

describe('PageupdatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageupdatorService]
    });
  });

  it('should be created', inject([PageupdatorService], (service: PageupdatorService) => {
    expect(service).toBeTruthy();
  }));
});
