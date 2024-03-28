import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as YearActions from '../actions/year.actions';
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {YearService} from "../../services/year/year.service";

@Injectable()
export class YearEffects {
  constructor(private actions$: Actions, private yearService: YearService, private router: Router) {}

  addYear$ = createEffect(() =>
    this.actions$.pipe(
      ofType(YearActions.addYear),
      mergeMap((action) =>
        this.yearService.save(action.yearRequest).pipe(
          map((yearResponse) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'New year created with success',
              showConfirmButton: false,
              timer: 1500
            });
            console.log(yearResponse);
            return YearActions.addYearSuccess({ yearResponse });
          }),
          catchError((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.message
            });
            return of(YearActions.addYearFailure({ error: error.error.message }));
          })
        )
      )
    )
  );

  loadYearsBySchoolId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(YearActions.loadYearsBySchoolId),
      mergeMap((action) =>
        this.yearService.getAllBySchoolId(action.schoolId).pipe(
          map((years) => YearActions.loadYearsBySchoolIdSuccess({ years })),
          catchError((error) => of(YearActions.loadYearsBySchoolIdFailure({ error: error.message })))
        )
      )
    )
  );


}
