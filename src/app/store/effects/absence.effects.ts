import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AbsenceActions from '../actions/absence.actions';
import {Router} from "@angular/router";
import {AbsenceService} from "../../services/absence/absence.service";

@Injectable()
export class AbsenceEffects {
  constructor(private actions$: Actions, private absenceService: AbsenceService, private router: Router) {}

  loadAbsencesByStudentId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AbsenceActions.loadAbsencesByStudentId),
      mergeMap((action) =>
        this.absenceService.getAllByStudentId(action.studentId).pipe(
          map((absences) => AbsenceActions.loadAbsencesByStudentIdSuccess({ absences })),
          catchError((error) => of(AbsenceActions.loadAbsencesByStudentIdFailure({ error: error.message })))
        )
      )
    )
  );

}
