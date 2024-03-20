import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAbsentForAStudentComponent } from './note-absent-for-a-student.component';

describe('NoteAbsentForAStudentComponent', () => {
  let component: NoteAbsentForAStudentComponent;
  let fixture: ComponentFixture<NoteAbsentForAStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteAbsentForAStudentComponent]
    });
    fixture = TestBed.createComponent(NoteAbsentForAStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
