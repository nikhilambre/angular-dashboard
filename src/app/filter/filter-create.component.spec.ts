import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCreateComponent } from './filter-create.component';

describe('FilterCreateComponent', () => {
  let component: FilterCreateComponent;
  let fixture: ComponentFixture<FilterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
