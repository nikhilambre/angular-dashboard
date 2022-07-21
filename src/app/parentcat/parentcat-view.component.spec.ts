import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcatViewComponent } from './parentcat-view.component';

describe('ParentcatViewComponent', () => {
  let component: ParentcatViewComponent;
  let fixture: ComponentFixture<ParentcatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
