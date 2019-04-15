import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportStatusComponent } from './passport-status.component';

describe('PassportStatusComponent', () => {
  let component: PassportStatusComponent;
  let fixture: ComponentFixture<PassportStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassportStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
