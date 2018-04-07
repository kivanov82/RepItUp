import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeasibilityTrackComponent } from './feasibility-track.component';

describe('FeasibilityTrackComponent', () => {
  let component: FeasibilityTrackComponent;
  let fixture: ComponentFixture<FeasibilityTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeasibilityTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeasibilityTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
