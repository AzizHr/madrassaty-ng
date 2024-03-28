import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import {Router} from "@angular/router";
import {ManagerAuthService} from "../../services/auth/manager/manager-auth.service";
import {StudentAuthService} from "../../services/auth/student/student-auth.service";
import {TeacherAuthService} from "../../services/auth/teacher/teacher-auth.service";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private managerAuthService: ManagerAuthService, private studentAuthService: StudentAuthService, private teacherAuthService: TeacherAuthService, private router: Router) {}

  getLoggedInManager$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getLoggedInManager),
      mergeMap(() =>
        this.managerAuthService.getLoggedInManager().pipe(
          map((auth) => AuthActions.getLoggedInManagerSuccess({ auth })),
          catchError((error) => of(AuthActions.getLoggedInManagerFailure({ error: error.message })))
        )
      )
    )
  );

  getLoggedInStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getLoggedInStudent),
      mergeMap(() =>
        this.studentAuthService.getLoggedInStudent().pipe(
          map((auth) => AuthActions.getLoggedInStudentSuccess({ auth })),
          catchError((error) => of(AuthActions.getLoggedInStudentFailure({ error: error.message })))
        )
      )
    )
  );

  getLoggedInTeacher$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getLoggedInTeacher),
      mergeMap(() =>
        this.teacherAuthService.getLoggedInTeacher().pipe(
          map((auth) => AuthActions.getLoggedInTeacherSuccess({ auth })),
          catchError((error) => of(AuthActions.getLoggedInTeacherFailure({ error: error.message })))
        )
      )
    )
  );

}
