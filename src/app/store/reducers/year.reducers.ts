import * as YearActions from '../actions/year.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/year.state";

export const yearReducer = createReducer(
  initialState,
  // Load Specialties By School ID
  on(YearActions.loadYearsBySchoolId, (state) => ({ ...state, isLoading: true })),
  on(YearActions.loadYearsBySchoolIdSuccess, (state, action) => ({ ...state, isLoading: false, years: action.years })),
  on(YearActions.loadYearsBySchoolIdFailure, (state, action) => ({ ...state, error: action.error })),

  // Add Specialty
  on(YearActions.addYear, (state) => ({ ...state, isLoading: true })),
  on(YearActions.addYearSuccess, (state, action) => ({ ...state, isLoading: false, selectedYear: action.yearResponse })),
  on(YearActions.addYearFailure, (state, action) => ({ ...state, error: action.error })),
);
