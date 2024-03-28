import * as AuthActions from '../actions/auth.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/auth.state";

export const authReducer = createReducer(
  initialState,
  // Get Logged In Manager
  on(AuthActions.getLoggedInManager, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.getLoggedInManagerSuccess, (state, action) => ({ ...state, isLoading: false, auth: action.auth })),
  on(AuthActions.getLoggedInManagerFailure, (state, action) => ({ ...state, error: action.error })),


  // Get Logged In Student
  on(AuthActions.getLoggedInStudent, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.getLoggedInStudentSuccess, (state, action) => ({ ...state, isLoading: false, auth: action.auth })),
  on(AuthActions.getLoggedInStudentFailure, (state, action) => ({ ...state, error: action.error })),


  // Get Logged In Teacher
  on(AuthActions.getLoggedInTeacher, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.getLoggedInTeacherSuccess, (state, action) => ({ ...state, isLoading: false, auth: action.auth })),
  on(AuthActions.getLoggedInTeacherFailure, (state, action) => ({ ...state, error: action.error })),
);
