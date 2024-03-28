import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SchoolActions from '../actions/school.actions';
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {SchoolService} from "../../services/school/school.service";

@Injectable()
export class SchoolEffects {
  constructor(private actions$: Actions, private schoolService: SchoolService, private router: Router) {}

  addSchool$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchoolActions.addSchool),
      mergeMap((action) =>
        this.schoolService.save(action.schoolRequest).pipe(
          map((schoolResponse) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'New school created with success',
              showConfirmButton: false,
              timer: 1500
            });
            console.log(schoolResponse);
            localStorage.setItem('schoolId', String(schoolResponse.id));
            this.router.navigateByUrl("manager/register")
            return SchoolActions.addSchoolSuccess({ schoolResponse });
          }),
          catchError((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.message
            });
            return of(SchoolActions.addSchoolFailure({ error: error.error.message }));
          })
        )
      )
    )
  );

  loadSchoolByManagerId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchoolActions.loadSchoolByManagerId),
      mergeMap((action) =>
        this.schoolService.getByManagerId(action.managerId).pipe(
          map((schoolResponse) => SchoolActions.loadSchoolByManagerIdSuccess({ schoolResponse })),
          catchError((error) => of(SchoolActions.loadSchoolByManagerIdFailure({ error: error.message })))
        )
      )
    )
  );

}
