import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageupdatorEditComponent } from './pageupdator-edit.component';

describe('PageupdatorEditComponent', () => {
  let component: PageupdatorEditComponent;
  let fixture: ComponentFixture<PageupdatorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageupdatorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageupdatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
