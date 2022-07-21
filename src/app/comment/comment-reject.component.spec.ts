import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentRejectComponent } from './comment-reject.component';

describe('CommentRejectComponent', () => {
  let component: CommentRejectComponent;
  let fixture: ComponentFixture<CommentRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentRejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
