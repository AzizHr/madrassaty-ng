import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentYearsComponent } from './student-years.component';

describe('StudentYearsComponent', () => {
  let component: StudentYearsComponent;
  let fixture: ComponentFixture<StudentYearsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentYearsComponent]
    });
    fixture = TestBed.createComponent(StudentYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
