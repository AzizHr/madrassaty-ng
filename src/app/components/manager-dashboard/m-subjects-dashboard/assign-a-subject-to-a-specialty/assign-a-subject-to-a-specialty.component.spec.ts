import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignASubjectToASpecialtyComponent } from './assign-a-subject-to-a-specialty.component';

describe('AssignASubjectToASpecialtyComponent', () => {
  let component: AssignASubjectToASpecialtyComponent;
  let fixture: ComponentFixture<AssignASubjectToASpecialtyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignASubjectToASpecialtyComponent]
    });
    fixture = TestBed.createComponent(AssignASubjectToASpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
