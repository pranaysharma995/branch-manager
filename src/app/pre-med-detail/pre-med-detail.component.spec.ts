import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreMedDetailComponent } from './pre-med-detail.component';

describe('PreMedDetailComponent', () => {
  let component: PreMedDetailComponent;
  let fixture: ComponentFixture<PreMedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreMedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreMedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
