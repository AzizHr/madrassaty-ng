import * as SpecialtyActions from '../actions/specialty.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/specialty.state";

export const specialtyReducer = createReducer(
  initialState,
  // Load Specialties By School ID
  on(SpecialtyActions.loadSpecialtiesBySchoolId, (state) => ({ ...state, isLoading: true })),
  on(SpecialtyActions.loadSpecialtiesBySchoolIdSuccess, (state, action) => ({ ...state, isLoading: false, specialtyPage: action.specialtyPage })),
  on(SpecialtyActions.loadSpecialtiesBySchoolIdFailure, (state, action) => ({ ...state, error: action.error })),

  // Load Specialties By School ID With No Pagination
  on(SpecialtyActions.loadSpecialtiesBySchoolIdWithNoPagination, (state) => ({ ...state, isLoading: true })),
  on(SpecialtyActions.loadSpecialtiesBySchoolIdWithNoPaginationSuccess, (state, action) => ({ ...state, isLoading: false, specialtyPage: action.specialtyPage })),
  on(SpecialtyActions.loadSpecialtiesBySchoolIdWithNoPaginationFailure, (state, action) => ({ ...state, error: action.error })),

  // Add Specialty
  on(SpecialtyActions.addSpecialty, (state) => ({ ...state, isLoading: true })),
  on(SpecialtyActions.addSpecialtySuccess, (state, action) => ({ ...state, isLoading: false, selectedSpecialty: action.specialtyResponse })),
  on(SpecialtyActions.addSpecialtyFailure, (state, action) => ({ ...state, error: action.error })),
);
