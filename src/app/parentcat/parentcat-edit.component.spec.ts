import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcatEditComponent } from './parentcat-edit.component';

describe('ParentcatEditComponent', () => {
  let component: ParentcatEditComponent;
  let fixture: ComponentFixture<ParentcatEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcatEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
