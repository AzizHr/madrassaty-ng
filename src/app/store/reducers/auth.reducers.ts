import * as ManagerActions from '../actions/manager.actions';
import * as StudentActions from '../actions/student.actions';
import * as TeacherActions from '../actions/teacher.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/auth.state";

export const authReducer = createReducer(
  initialState,
  // Get Logged In Manager
  on(ManagerActions.getLoggedInManager, (state) => ({ ...state, isLoading: true })),
  on(ManagerActions.getLoggedInManagerSuccess, (state, action) => ({ ...state, isLoading: false, auth: action.auth })),
  on(ManagerActions.getLoggedInManagerFailure, (state, action) => ({ ...state, error: action.error })),


  // Get Logged In Student
  on(StudentActions.getLoggedInStudent, (state) => ({ ...state, isLoading: true })),
  on(StudentActions.getLoggedInStudentSuccess, (state, action) => ({ ...state, isLoading: false, auth: action.auth })),
  on(StudentActions.getLoggedInStudentFailure, (state, action) => ({ ...state, error: action.error })),


  // Get Logged In Teacher
  on(TeacherActions.getLoggedInTeacher, (state) => ({ ...state, isLoading: true })),
  on(TeacherActions.getLoggedInTeacherSuccess, (state, action) => ({ ...state, isLoading: false, auth: action.auth })),
  on(TeacherActions.getLoggedInTeacherFailure, (state, action) => ({ ...state, error: action.error })),
);
