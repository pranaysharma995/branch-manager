import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingApplicantsComponent } from './walking-applicants.component';

describe('WalkingApplicantsComponent', () => {
  let component: WalkingApplicantsComponent;
  let fixture: ComponentFixture<WalkingApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkingApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
