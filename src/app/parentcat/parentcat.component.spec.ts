import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcatComponent } from './parentcat.component';

describe('ParentcatComponent', () => {
  let component: ParentcatComponent;
  let fixture: ComponentFixture<ParentcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
