import * as StudentActions from '../actions/student.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/student.state";

export const studentReducer = createReducer(
  initialState,
  // Load Students By School ID
  on(StudentActions.loadStudentsBySchoolId, (state) => ({ ...state, isLoading: true })),
  on(StudentActions.loadStudentsBySchoolIdSuccess, (state, action) => ({ ...state, isLoading: false, studentPage: action.studentPage })),
  on(StudentActions.loadStudentsBySchoolIdFailure, (state, action) => ({ ...state, error: action.error })),

    // Load Students By School ID With No Pagination
    on(StudentActions.loadStudentsByClassIdWithNoPagination, (state) => ({ ...state, isLoading: true })),
    on(StudentActions.loadStudentsByClassIdWithNoPaginationSuccess, (state, action) => ({ ...state, isLoading: false, studentPage: action.studentPage })),
    on(StudentActions.loadStudentsByClassIdWithNoPaginationFailure, (state, action) => ({ ...state, error: action.error })),

  // Load Students By Class ID
  on(StudentActions.loadStudentsByClassId, (state) => ({ ...state, isLoading: true })),
  on(StudentActions.loadStudentsByClassIdSuccess, (state, action) => ({ ...state, isLoading: false, studentPage: action.studentPage })),
  on(StudentActions.loadStudentsByClassIdFailure, (state, action) => ({ ...state, error: action.error })),
);
