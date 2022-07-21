import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageupdatorComponent } from './pageupdator.component';

describe('PageupdatorComponent', () => {
  let component: PageupdatorComponent;
  let fixture: ComponentFixture<PageupdatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageupdatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageupdatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
