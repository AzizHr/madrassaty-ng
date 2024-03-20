import * as TeacherActions from '../actions/teacher.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/teacher.state";

export const teacherReducer = createReducer(
  initialState,
  // Load Teachers By School ID
  on(TeacherActions.loadTeachersBySchoolId, (state) => ({ ...state, isLoading: true })),
  on(TeacherActions.loadTeachersBySchoolIdSuccess, (state, action) => ({ ...state, isLoading: false, teacherPage: action.teacherPage })),
  on(TeacherActions.loadTeachersBySchoolIdFailure, (state, action) => ({ ...state, error: action.error })),

  // Load Teachers By School ID With No Pagination
  on(TeacherActions.loadTeachersBySchoolIdWithNoPagination, (state) => ({ ...state, isLoading: true })),
  on(TeacherActions.loadTeachersBySchoolIdWithNoPaginationSuccess, (state, action) => ({ ...state, isLoading: false, teacherPage: action.teacherPage })),
  on(TeacherActions.loadTeachersBySchoolIdWithNoPaginationFailure, (state, action) => ({ ...state, error: action.error })),

  // Load Teachers By Class ID
  on(TeacherActions.loadTeachersByClassId, (state) => ({ ...state, isLoading: true })),
  on(TeacherActions.loadTeachersByClassIdSuccess, (state, action) => ({ ...state, isLoading: false, teacherPage: action.teacherPage })),
  on(TeacherActions.loadTeachersByClassIdFailure, (state, action) => ({ ...state, error: action.error })),

  // Assign A Teacher To A Class
  on(TeacherActions.assignATeacherToAClass, (state) => ({ ...state, isLoading: true })),
  on(TeacherActions.assignATeacherToAClassSuccess, (state, action) => ({ ...state, isLoading: false, selectedTeacher: action.teacherClassResponse })),
  on(TeacherActions.assignATeacherToAClassFailure, (state, action) => ({ ...state, error: action.error })),
);
