import * as SchoolActions from '../actions/school.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/school.state";

export const schoolReducer = createReducer(
  initialState,
  // Load School By Manager ID
  on(SchoolActions.loadSchoolByManagerId, (state) => ({ ...state, isLoading: true })),
  on(SchoolActions.loadSchoolByManagerIdSuccess, (state, action) => ({ ...state, isLoading: false, selectedSchool: action.schoolResponse })),
  on(SchoolActions.loadSchoolByManagerIdFailure, (state, action) => ({ ...state, error: action.error })),

  // Add School
  on(SchoolActions.addSchool, (state) => ({ ...state, isLoading: true })),
  on(SchoolActions.addSchoolSuccess, (state, action) => ({ ...state, isLoading: false, selectedSchool: action.schoolResponse })),
  on(SchoolActions.addSchoolFailure, (state, action) => ({ ...state, error: action.error })),
);
