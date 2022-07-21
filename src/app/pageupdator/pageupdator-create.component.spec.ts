import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageupdatorCreateComponent } from './pageupdator-create.component';

describe('PageupdatorCreateComponent', () => {
  let component: PageupdatorCreateComponent;
  let fixture: ComponentFixture<PageupdatorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageupdatorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageupdatorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
