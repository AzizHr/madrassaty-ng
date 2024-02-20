import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRegisterComponent } from './teacher-register.component';

describe('TeacherRegisterComponent', () => {
  let component: TeacherRegisterComponent;
  let fixture: ComponentFixture<TeacherRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherRegisterComponent]
    });
    fixture = TestBed.createComponent(TeacherRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
