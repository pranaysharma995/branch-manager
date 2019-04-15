import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAgentListComponent } from './single-agent-list.component';

describe('SingleAgentListComponent', () => {
  let component: SingleAgentListComponent;
  let fixture: ComponentFixture<SingleAgentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAgentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAgentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
