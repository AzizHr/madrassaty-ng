import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as StudentActions from '../actions/student.actions';
import {Router} from "@angular/router";
import {StudentService} from "../../services/student/student.service";

@Injectable()
export class StudentEffects {
  constructor(private actions$: Actions, private studentService: StudentService, private router: Router) {}


  loadStudentsByClassId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadStudentsByClassId),
      mergeMap((action) =>
        this.studentService.getAllByClassId(action.classId, action.page, action.size).pipe(
          map((studentPage) => StudentActions.loadStudentsByClassIdSuccess({ studentPage })),
          catchError((error) => of(StudentActions.loadStudentsByClassIdFailure({ error: error.message })))
        )
      )
    )
  );

  loadStudentsByClassIdWithNoPagination$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadStudentsByClassIdWithNoPagination),
      mergeMap((action) =>
        this.studentService.getAllByClassIdWithNoPagination(action.classId).pipe(
          map((studentPage) => StudentActions.loadStudentsByClassIdWithNoPaginationSuccess({ studentPage })),
          catchError((error) => of(StudentActions.loadStudentsByClassIdWithNoPaginationFailure({ error: error.message })))
        )
      )
    )
  );

  loadStudentsBySchoolId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadStudentsBySchoolId),
      mergeMap((action) =>
        this.studentService.getAllBySchoolId(action.schoolId, action.page, action.size).pipe(
          map((studentPage) => StudentActions.loadStudentsBySchoolIdSuccess({ studentPage })),
          catchError((error) => of(StudentActions.loadStudentsBySchoolIdFailure({ error: error.message })))
        )
      )
    )
  );

    loadStudentsBySchoolIdWithNoPagination$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StudentActions.loadStudentsBySchoolIdWithNoPagination),
            mergeMap((action) =>
                this.studentService.getAllBySchoolIdWithNoPagination(action.schoolId).pipe(
                    map((studentPage) => StudentActions.loadStudentsBySchoolIdWithNoPaginationSuccess({ studentPage })),
                    catchError((error) => of(StudentActions.loadStudentsBySchoolIdWithNoPaginationFailure({ error: error.message })))
                )
            )
        )
    );

}
