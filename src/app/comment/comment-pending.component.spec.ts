import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPendingComponent } from './comment-pending.component';

describe('CommentPendingComponent', () => {
  let component: CommentPendingComponent;
  let fixture: ComponentFixture<CommentPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
