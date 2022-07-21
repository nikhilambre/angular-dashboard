import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcatCreateComponent } from './parentcat-create.component';

describe('ParentcatCreateComponent', () => {
  let component: ParentcatCreateComponent;
  let fixture: ComponentFixture<ParentcatCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcatCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
