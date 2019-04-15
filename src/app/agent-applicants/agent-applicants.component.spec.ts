import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentApplicantsComponent } from './agent-applicants.component';

describe('AgentApplicantsComponent', () => {
  let component: AgentApplicantsComponent;
  let fixture: ComponentFixture<AgentApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
