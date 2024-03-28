import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAStudentComponent } from './register-a-student.component';

describe('RegisterAStudentComponent', () => {
  let component: RegisterAStudentComponent;
  let fixture: ComponentFixture<RegisterAStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAStudentComponent]
    });
    fixture = TestBed.createComponent(RegisterAStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
