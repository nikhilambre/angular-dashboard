import { TestBed, inject } from '@angular/core/testing';

import { ParentcatService } from './parentcat.service';

describe('ParentcatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentcatService]
    });
  });

  it('should be created', inject([ParentcatService], (service: ParentcatService) => {
    expect(service).toBeTruthy();
  }));
});
