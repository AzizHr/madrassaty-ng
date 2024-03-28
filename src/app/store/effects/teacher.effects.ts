import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as TeacherActions from '../actions/teacher.actions';
import {Router} from "@angular/router";
import {TeacherService} from "../../services/teacher/teacher.service";
import * as UserActions from "../actions/user.actions";
import Swal from "sweetalert2";

@Injectable()
export class TeacherEffects {
  constructor(private actions$: Actions, private teacherService: TeacherService, private router: Router) {}

  getLoggedInTeacher$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeacherActions.loadTeachersByClassId),
      mergeMap((action) =>
        this.teacherService.getAllByClassId(action.classId, action.page, action.size).pipe(
          map((teacherPage) => TeacherActions.loadTeachersByClassIdSuccess({ teacherPage })),
          catchError((error) => of(TeacherActions.loadTeachersByClassIdFailure({ error: error.message })))
        )
      )
    )
  );

  loadTeachersBySchoolId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeacherActions.loadTeachersBySchoolId),
      mergeMap((action) =>
        this.teacherService.getAllBySchoolId(action.schoolId, action.page, action.size).pipe(
          map((teacherPage) => TeacherActions.loadTeachersBySchoolIdSuccess({ teacherPage })),
          catchError((error) => of(TeacherActions.loadTeachersBySchoolIdFailure({ error: error.message })))
        )
      )
    )
  );

  loadTeachersBySchoolIdWithNoPagination$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeacherActions.loadTeachersBySchoolIdWithNoPagination),
      mergeMap((action) =>
        this.teacherService.getAllBySchoolIdWithNoPagination(action.schoolId).pipe(
          map((teacherPage) => TeacherActions.loadTeachersBySchoolIdWithNoPaginationSuccess({ teacherPage })),
          catchError((error) => of(TeacherActions.loadTeachersBySchoolIdWithNoPaginationFailure({ error: error.message })))
        )
      )
    )
  );

  assignATeacherToAClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeacherActions.assignATeacherToAClass),
      mergeMap((action) =>
        this.teacherService.assignATeacherToAClass(action.teacherClassRequest).pipe(
          map((teacherClassResponse) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Assigned with success',
              showConfirmButton: false,
              timer: 1500
            });
            console.log(teacherClassResponse);
            return TeacherActions.assignATeacherToAClassSuccess({ teacherClassResponse });
          }),
          catchError((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.message
            });
            return of(TeacherActions.assignATeacherToAClassFailure({ error: error.error.message }));
          })
        )
      )
    )
  );

}
