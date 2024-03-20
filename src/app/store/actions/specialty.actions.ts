import { createAction, props } from '@ngrx/store';
import {SpecialtyResponse} from "../../models/response/specialty-response";
import {SpecialtyRequest} from "../../models/request/specialty-request";
import {Page} from "../../models/page/page";
import {ClassResponse} from "../../models/response/class-response";

export const loadSpecialtiesBySchoolId = createAction("[Specialty] Load Specialties By School Id", props<{ schoolId: number, page: number, size: number }>());
export const loadSpecialtiesBySchoolIdSuccess = createAction("[Specialty] Load Specialties By School Id Success", props<{ specialtyPage: Page<SpecialtyResponse> }>());
export const loadSpecialtiesBySchoolIdFailure = createAction("[Specialty] Load Specialties By School Id Failure", props<{ error: string }>());

export const loadSpecialtiesBySchoolIdWithNoPagination = createAction("[Specialty] Load Specialties By School Id With No Pagination", props<{ schoolId: number }>());
export const loadSpecialtiesBySchoolIdWithNoPaginationSuccess = createAction("[Specialty] Load Specialties By School Id With No Pagination Success", props<{ specialtyPage: Page<SpecialtyResponse> }>());
export const loadSpecialtiesBySchoolIdWithNoPaginationFailure = createAction("[Specialty] Load Specialties By School Id With No Pagination Failure", props<{ error: string }>());

export const addSpecialty = createAction("[Specialty] Add Specialty", props<{ specialtyRequest: SpecialtyRequest }>());
export const addSpecialtySuccess = createAction("[Specialty] Add Specialty Success", props<{ specialtyResponse: SpecialtyResponse }>());
export const addSpecialtyFailure = createAction("[Specialty] Add Specialty Failure", props<{ error: string }>());
