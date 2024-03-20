import * as SubjectActions from '../actions/subject.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/subject.state";

export const subjectReducer = createReducer(
  initialState,
  // Load Subjects By Specialty ID
  on(SubjectActions.loadSubjectsBySchoolId, (state) => ({ ...state, isLoading: true })),
  on(SubjectActions.loadSubjectsBySchoolIdSuccess, (state, action) => ({ ...state, isLoading: false, subjectPage: action.subjectPage })),
  on(SubjectActions.loadSubjectsBySchoolIdFailure, (state, action) => ({ ...state, error: action.error })),

  // Load Subjects By Specialty ID With No Pagination
  on(SubjectActions.loadSubjectsBySchoolIdWithNoPagination, (state) => ({ ...state, isLoading: true })),
  on(SubjectActions.loadSubjectsBySchoolIdWithNoPaginationSuccess, (state, action) => ({ ...state, isLoading: false, subjectPage: action.subjectPage })),
  on(SubjectActions.loadSubjectsBySchoolIdWithNoPaginationFailure, (state, action) => ({ ...state, error: action.error })),

  // Add Subject
  on(SubjectActions.addSubject, (state) => ({ ...state, isLoading: true })),
  on(SubjectActions.addSubjectSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      subjectPage: {
        ...state.subjectPage, // Spread existing subjectPage properties
        content: [...state.subjectPage.content, action.subjectResponse],
      },
    };
  }),
  on(SubjectActions.addSubjectFailure, (state, action) => ({ ...state, error: action.error })),

  // Assign A Subject To A Specialty
  on(SubjectActions.assignASubjectToASpecialty, (state) => ({ ...state, isLoading: true })),
  on(SubjectActions.assignASubjectToASpecialtySuccess, (state, action) => ({ ...state, isLoading: false, selectedSubject: action.specialtySubjectResponse })),
  on(SubjectActions.assignASubjectToASpecialtyFailure, (state, action) => ({ ...state, error: action.error })),
);
