import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSpecialtiesDashboardComponent } from './m-specialties-dashboard.component';

describe('MSpecialtiesDashboardComponent', () => {
  let component: MSpecialtiesDashboardComponent;
  let fixture: ComponentFixture<MSpecialtiesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MSpecialtiesDashboardComponent]
    });
    fixture = TestBed.createComponent(MSpecialtiesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
