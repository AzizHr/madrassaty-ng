import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterATeacherComponent } from './register-a-teacher.component';

describe('RegisterATeacherComponent', () => {
  let component: RegisterATeacherComponent;
  let fixture: ComponentFixture<RegisterATeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterATeacherComponent]
    });
    fixture = TestBed.createComponent(RegisterATeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
