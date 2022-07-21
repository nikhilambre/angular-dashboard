import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoViewComponent } from './seo-view.component';

describe('SeoViewComponent', () => {
  let component: SeoViewComponent;
  let fixture: ComponentFixture<SeoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
