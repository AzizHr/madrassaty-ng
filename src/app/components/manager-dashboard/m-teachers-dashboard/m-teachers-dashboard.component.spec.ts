import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTeachersDashboardComponent } from './m-teachers-dashboard.component';

describe('MTeachersDashboardComponent', () => {
  let component: MTeachersDashboardComponent;
  let fixture: ComponentFixture<MTeachersDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MTeachersDashboardComponent]
    });
    fixture = TestBed.createComponent(MTeachersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
