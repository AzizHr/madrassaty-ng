import { initialState } from 'src/app/state/class.state';
import * as ClassActions from '../actions/class.actions';
import {createReducer, on} from "@ngrx/store";

export const classReducer = createReducer(
  initialState,
  // Load Classes By School ID
  on(ClassActions.loadClassesBySchoolId, (state) => ({ ...state, isLoading: true })),
  on(ClassActions.loadClassesBySchoolIdSuccess, (state, action) => ({ ...state, isLoading: false, classPage: action.classPage })),
  on(ClassActions.loadClassesBySchoolIdFailure, (state, action) => ({ ...state, error: action.error })),

    // Load Classes By School ID With No Pagination
    on(ClassActions.loadClassesBySchoolIdWithNoPagination, (state) => ({ ...state, isLoading: true })),
    on(ClassActions.loadClassesBySchoolIdWithNoPaginationSuccess, (state, action) => ({ ...state, isLoading: false, classPage: action.classPage })),
    on(ClassActions.loadClassesBySchoolIdWithNoPaginationFailure, (state, action) => ({ ...state, error: action.error })),

  // Load Classes By Teacher ID
  on(ClassActions.loadClassesByTeacherId, (state) => ({ ...state, isLoading: true })),
  on(ClassActions.loadClassesByTeacherIdSuccess, (state, action) => ({ ...state, isLoading: false, classPage: action.classPage })),
  on(ClassActions.loadClassesByTeacherIdFailure, (state, action) => ({ ...state, error: action.error })),

  // Load Classes By Teacher ID With No Pagination
  on(ClassActions.loadClassesByTeacherIdWithNoPagination, (state) => ({ ...state, isLoading: true })),
  on(ClassActions.loadClassesByTeacherIdWithNoPaginationSuccess, (state, action) => ({ ...state, isLoading: false, classPage: action.classPage })),
  on(ClassActions.loadClassesByTeacherIdWithNoPaginationFailure, (state, action) => ({ ...state, error: action.error })),

  // Add Class
  on(ClassActions.addClass, (state) => ({ ...state, isLoading: true })),
  on(ClassActions.addClassSuccess, (state, action) => ({ ...state, isLoading: false, selectedClass: action.classResponse })),
  on(ClassActions.addClassFailure, (state, action) => ({ ...state, error: action.error })),
);
