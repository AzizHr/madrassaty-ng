import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SubjectActions from '../actions/subject.actions';
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {SubjectService} from "../../services/subject/subject.service";

@Injectable()
export class SubjectEffects {
  constructor(private actions$: Actions, private subjectService: SubjectService, private router: Router) {}

  addSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubjectActions.addSubject),
      mergeMap((action) =>
        this.subjectService.save(action.subjectRequest).pipe(
          map((subjectResponse) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'New subject created with success',
              showConfirmButton: false,
              timer: 1500
            });
            console.log(subjectResponse);
            return SubjectActions.addSubjectSuccess({ subjectResponse });
          }),
          catchError((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.message
            });
            return of(SubjectActions.addSubjectFailure({ error: error.error.message }));
          })
        )
      )
    )
  );

  assignASubjectToASpecialty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubjectActions.assignASubjectToASpecialty),
      mergeMap((action) =>
        this.subjectService.assignASubjectToASpecialty(action.specialtySubjectRequest).pipe(
          map((specialtySubjectResponse) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Assigned with success',
              showConfirmButton: false,
              timer: 1500
            });
            console.log(specialtySubjectResponse);
            return SubjectActions.assignASubjectToASpecialtySuccess({ specialtySubjectResponse });
          }),
          catchError((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.message
            });
            return of(SubjectActions.assignASubjectToASpecialtyFailure({ error: error.error.message }));
          })
        )
      )
    )
  );

  loadSubjectsBySchoolId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubjectActions.loadSubjectsBySchoolId),
      mergeMap((action) =>
        this.subjectService.getAllBySchoolId(action.schoolId, action.page, action.size).pipe(
          map((subjectPage) => SubjectActions.loadSubjectsBySchoolIdSuccess({ subjectPage })),
          catchError((error) => of(SubjectActions.loadSubjectsBySchoolIdFailure({ error: error.message })))
        )
      )
    )
  );

  loadSubjectsBySchoolIdWithNoPagination$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubjectActions.loadSubjectsBySchoolIdWithNoPagination),
      mergeMap((action) =>
        this.subjectService.getAllBySchoolIdWithNoPagination(action.schoolId).pipe(
          map((subjectPage) => SubjectActions.loadSubjectsBySchoolIdWithNoPaginationSuccess({ subjectPage })),
          catchError((error) => of(SubjectActions.loadSubjectsBySchoolIdWithNoPaginationFailure({ error: error.message })))
        )
      )
    )
  );

}
