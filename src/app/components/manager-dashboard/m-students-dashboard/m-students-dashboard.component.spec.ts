import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MStudentsDashboardComponent } from './m-students-dashboard.component';

describe('MStudentsDashboardComponent', () => {
  let component: MStudentsDashboardComponent;
  let fixture: ComponentFixture<MStudentsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MStudentsDashboardComponent]
    });
    fixture = TestBed.createComponent(MStudentsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
