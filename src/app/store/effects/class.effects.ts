import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ClassActions from '../actions/class.actions';
import {Router} from "@angular/router";
import {ClassService} from "../../services/class/class.service";
import Swal from "sweetalert2";

@Injectable()
export class ClassEffects {
  constructor(private actions$: Actions, private classService: ClassService, private router: Router) {}

  addClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClassActions.addClass),
      mergeMap((action) =>
        this.classService.save(action.classRequest).pipe(
          map((classResponse) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'New class created with success',
              showConfirmButton: false,
              timer: 1500
            });
            console.log(classResponse);
            return ClassActions.addClassSuccess({ classResponse });
          }),
          catchError((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.message
            });
            return of(ClassActions.addClassFailure({ error: error.error.message }));
          })
        )
      )
    )
  );


  loadClassesBySchoolId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClassActions.loadClassesBySchoolId),
      mergeMap((action) =>
        this.classService.getAllBySchoolId(action.schoolId, action.page, action.size).pipe(
          map((classPage) => ClassActions.loadClassesBySchoolIdSuccess({ classPage })),
          catchError((error) => of(ClassActions.loadClassesBySchoolIdFailure({ error: error.message })))
        )
      )
    )
  );

    loadClassesBySchoolIdWithNoPagination$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClassActions.loadClassesBySchoolIdWithNoPagination),
            mergeMap((action) =>
                this.classService.getAllBySchoolIdWithNoPagination(action.schoolId).pipe(
                    map((classPage) => ClassActions.loadClassesBySchoolIdWithNoPaginationSuccess({ classPage })),
                    catchError((error) => of(ClassActions.loadClassesBySchoolIdWithNoPaginationFailure({ error: error.message })))
                )
            )
        )
    );

  loadClassesByTeacherId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClassActions.loadClassesByTeacherId),
      mergeMap((action) =>
        this.classService.getAllByTeacherId(action.teacherId, action.page, action.size).pipe(
          map((classPage) => ClassActions.loadClassesByTeacherIdSuccess({ classPage })),
          catchError((error) => of(ClassActions.loadClassesByTeacherIdFailure({ error: error.message })))
        )
      )
    )
  );

  loadClassesByTeacherIdWithNoPagination$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClassActions.loadClassesByTeacherIdWithNoPagination),
      mergeMap((action) =>
        this.classService.getAllByTeacherIdWithNoPagination(action.teacherId).pipe(
          map((classPage) => ClassActions.loadClassesByTeacherIdWithNoPaginationSuccess({ classPage })),
          catchError((error) => of(ClassActions.loadClassesByTeacherIdWithNoPaginationFailure({ error: error.message })))
        )
      )
    )
  );

}
