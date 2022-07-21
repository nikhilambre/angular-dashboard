import { TestBed, inject } from '@angular/core/testing';

import { OrderCommentService } from './order-comment.service';

describe('OrderCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderCommentService]
    });
  });

  it('should be created', inject([OrderCommentService], (service: OrderCommentService) => {
    expect(service).toBeTruthy();
  }));
});
