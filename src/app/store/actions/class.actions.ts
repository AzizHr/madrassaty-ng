import { createAction, props } from '@ngrx/store';
import {ClassResponse} from "../../models/response/class-response";
import {ClassRequest} from "../../models/request/class-request";
import {Page} from "../../models/page/page";

export const loadClassesBySchoolId = createAction("[Class] Load Classes By School Id", props<{ schoolId: string, page: number, size: number }>());
export const loadClassesBySchoolIdSuccess = createAction("[Class] Load Classes By School Id Success", props<{ classPage: Page<ClassResponse> }>());
export const loadClassesBySchoolIdFailure = createAction("[Class] Load Classes By School Id Failure", props<{ error: string }>());

export const loadClassesBySchoolIdWithNoPagination = createAction("[Class] Load Classes By School Id With No Pagination", props<{ schoolId: string }>());
export const loadClassesBySchoolIdWithNoPaginationSuccess = createAction("[Class] Load Classes By School Id With No Pagination Success", props<{ classPage: Page<ClassResponse> }>());
export const loadClassesBySchoolIdWithNoPaginationFailure = createAction("[Class] Load Classes By School Id With No Pagination Failure", props<{ error: string }>());

export const loadClassesByTeacherId = createAction("[Class] Load Classes By Teacher Id", props<{ teacherId: string, page: number, size: number }>());
export const loadClassesByTeacherIdSuccess = createAction("[Class] Load Classes By Teacher Id Success", props<{ classPage: Page<ClassResponse> }>());
export const loadClassesByTeacherIdFailure = createAction("[Class] Load Classes By Teacher Id Failure", props<{ error: string }>());

export const loadClassesByTeacherIdWithNoPagination = createAction("[Class] Load Classes By Teacher Id With No Pagination", props<{ teacherId: string }>());
export const loadClassesByTeacherIdWithNoPaginationSuccess = createAction("[Class] Load Classes By Teacher Id With No Pagination Success", props<{ classPage: Page<ClassResponse> }>());
export const loadClassesByTeacherIdWithNoPaginationFailure = createAction("[Class] Load Classes By Teacher Id With No Pagination Failure", props<{ error: string }>());

export const addClass = createAction("[Class] Add Class", props<{ classRequest: ClassRequest }>());
export const addClassSuccess = createAction("[Class] Add Class Success", props<{ classResponse: ClassResponse }>());
export const addClassFailure = createAction("[Class] Add Class Failure", props<{ error: string }>());
