import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SpecialtyActions from '../actions/specialty.actions';
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {SpecialtyService} from "../../services/specialty/specialty.service";

@Injectable()
export class SpecialtyEffects {
  constructor(private actions$: Actions, private specialtyService: SpecialtyService, private router: Router) {}

  addSpecialty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpecialtyActions.addSpecialty),
      mergeMap((action) =>
        this.specialtyService.save(action.specialtyRequest).pipe(
          map((specialtyResponse) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'New specialty created with success',
              showConfirmButton: false,
              timer: 1500
            });
            console.log(specialtyResponse);
            return SpecialtyActions.addSpecialtySuccess({ specialtyResponse });
          }),
          catchError((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.message
            });
            return of(SpecialtyActions.addSpecialtyFailure({ error: error.error.message }));
          })
        )
      )
    )
  );

  loadSpecialtiesBySchoolId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpecialtyActions.loadSpecialtiesBySchoolId),
      mergeMap((action) =>
        this.specialtyService.getAllBySchoolId(action.schoolId, action.page, action.size).pipe(
          map((specialtyPage) => SpecialtyActions.loadSpecialtiesBySchoolIdSuccess({ specialtyPage })),
          catchError((error) => of(SpecialtyActions.loadSpecialtiesBySchoolIdFailure({ error: error.message })))
        )
      )
    )
  );

  loadSpecialtiesBySchoolIdWithNoPagination$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpecialtyActions.loadSpecialtiesBySchoolIdWithNoPagination),
      mergeMap((action) =>
        this.specialtyService.getAllBySchoolIdWithNoPagination(action.schoolId).pipe(
          map((specialtyPage) => SpecialtyActions.loadSpecialtiesBySchoolIdWithNoPaginationSuccess({ specialtyPage })),
          catchError((error) => of(SpecialtyActions.loadSpecialtiesBySchoolIdWithNoPaginationFailure({ error: error.message })))
        )
      )
    )
  );

}
