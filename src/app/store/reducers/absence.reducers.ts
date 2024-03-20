import * as AbsenceActions from '../actions/absence.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/absence.state";

export const absenceReducer = createReducer(
  initialState,
  // Load Absences By Student ID
  on(AbsenceActions.loadAbsencesByStudentId, (state) => ({ ...state, isLoading: true })),
  on(AbsenceActions.loadAbsencesByStudentIdSuccess, (state, action) => ({ ...state, isLoading: false, absences: action.absences })),
  on(AbsenceActions.loadAbsencesByStudentIdFailure, (state, action) => ({ ...state, error: action.error })),

);
