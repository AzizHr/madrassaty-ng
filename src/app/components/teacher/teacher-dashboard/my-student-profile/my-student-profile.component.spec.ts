import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStudentProfileComponent } from './my-student-profile.component';

describe('MyStudentProfileComponent', () => {
  let component: MyStudentProfileComponent;
  let fixture: ComponentFixture<MyStudentProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyStudentProfileComponent]
    });
    fixture = TestBed.createComponent(MyStudentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
