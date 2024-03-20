import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignATeacherToAClassComponent } from './assign-a-teacher-to-a-class.component';

describe('AssignATeacherToAClassComponent', () => {
  let component: AssignATeacherToAClassComponent;
  let fixture: ComponentFixture<AssignATeacherToAClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignATeacherToAClassComponent]
    });
    fixture = TestBed.createComponent(AssignATeacherToAClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
