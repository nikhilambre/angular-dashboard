import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoEditComponent } from './seo-edit.component';

describe('SeoEditComponent', () => {
  let component: SeoEditComponent;
  let fixture: ComponentFixture<SeoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
