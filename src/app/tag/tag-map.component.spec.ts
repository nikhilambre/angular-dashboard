import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagMapComponent } from './tag-map.component';

describe('TagMapComponent', () => {
  let component: TagMapComponent;
  let fixture: ComponentFixture<TagMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
