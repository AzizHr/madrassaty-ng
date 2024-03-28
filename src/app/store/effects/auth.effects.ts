import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AuthActions from '../actions/school.actions';
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {ManagerAuthService} from "../../services/auth/manager/manager-auth.service";

@Injectable()
export class SchoolEffects {
  constructor(private actions$: Actions, private managerAuthService: ManagerAuthService, private router: Router) {}

  getLoggedInManager$ = createEffect(() =>
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
