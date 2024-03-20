import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import * as TeacherActions from "../../../../store/actions/teacher.actions";
import {teachersSelector} from "../../../../store/selectors/teacher.selectors";
import {classesSelector} from "../../../../store/selectors/class.selectors";
import {TeacherClassRequest} from "../../../../models/request/teacher-class-request";
import {UserResponse} from "../../../../models/response/user-response";
import {ClassResponse} from "../../../../models/response/class-response";
import {loadTeachersBySchoolIdWithNoPagination} from "../../../../store/actions/teacher.actions";
import {loadClassesBySchoolIdWithNoPagination} from "../../../../store/actions/class.actions";

@Component({
  selector: 'app-assign-a-teacher-to-a-class',
  templateUrl: './assign-a-teacher-to-a-class.component.html',
  styleUrls: ['./assign-a-teacher-to-a-class.component.css']
})
export class AssignATeacherToAClassComponent {

  isSubmitted: boolean = false;
  teachers$: Observable<any>;
  teachers: UserResponse[] = [];
  classes$: Observable<any>;
  classes: ClassResponse[] = [];
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.teachers$ = this.store.pipe(select(teachersSelector))
    this.classes$ = this.store.pipe(select(classesSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(loadTeachersBySchoolIdWithNoPagination({ schoolId: 1 }));
    this.teachers$.subscribe((data) => {
      this.teachers = data.content;
      console.log(data.content)
    })

    this.store.dispatch(loadClassesBySchoolIdWithNoPagination({ schoolId: 1 }));
    this.classes$.subscribe((data) => {
      this.classes = data.content;
      console.log(data.content)
    })
  }

  teacherClassForm = this.formBuilder.group({
    teacherId: [null, [Validators.required]],
    classId: [null, [Validators.required]]
  });

  onSubmit() {
    const teacherClassRequest: TeacherClassRequest = {
      teacherId: this.teacherClassForm.value.teacherId,
      classId: this.teacherClassForm.value.classId
    }

    this.store.dispatch(TeacherActions.assignATeacherToAClass({ teacherClassRequest: teacherClassRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.teacherClassForm.get(field)?.hasError(errorType) &&
      (this.teacherClassForm.get(field)?.dirty ||
        this.teacherClassForm.get(field)?.touched || this.isSubmitted);
  }

}
