import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoCreateComponent } from './seo-create.component';

describe('SeoCreateComponent', () => {
  let component: SeoCreateComponent;
  let fixture: ComponentFixture<SeoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
