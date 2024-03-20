import { createAction, props } from '@ngrx/store';
import {SubjectResponse} from "../../models/response/subject-response";
import {SubjectRequest} from "../../models/request/subject-request";
import {SpecialtySubjectRequest} from "../../models/request/specialty-subject-request";
import {SpecialtySubjectResponse} from "../../models/response/specialty-subject-response";
import {Page} from "../../models/page/page";


export const loadSubjectsBySchoolId = createAction("[Subject] Load Subjects By School Id", props<{ schoolId: number, page: number, size: number }>());
export const loadSubjectsBySchoolIdSuccess = createAction("[Subject] Load Subjects By School Id Success", props<{ subjectPage: Page<SubjectResponse> }>());
export const loadSubjectsBySchoolIdFailure = createAction("[Subject] Load Subjects By School Id Failure", props<{ error: string }>());

export const loadSubjectsBySchoolIdWithNoPagination = createAction("[Subject] Load Subjects By School Id With No Pagination", props<{ schoolId: number }>());
export const loadSubjectsBySchoolIdWithNoPaginationSuccess = createAction("[Subject] Load Subjects By School Id With No Pagination Success", props<{ subjectPage: Page<SubjectResponse> }>());
export const loadSubjectsBySchoolIdWithNoPaginationFailure = createAction("[Subject] Load Subjects By School Id With No Pagination Failure", props<{ error: string }>());

export const addSubject = createAction("[Subject] Add Subject", props<{ subjectRequest: SubjectRequest }>());
export const addSubjectSuccess = createAction("[Subject] Add Subject Success", props<{ subjectResponse: SubjectResponse }>());
export const addSubjectFailure = createAction("[Subject] Add Subject Failure", props<{ error: string }>());

export const assignASubjectToASpecialty = createAction("[Subject] Assign A Subject To A Specialty", props<{ specialtySubjectRequest: SpecialtySubjectRequest }>());
export const assignASubjectToASpecialtySuccess = createAction("[Subject] Assign A Subject To A Specialty Success", props<{ specialtySubjectResponse: SpecialtySubjectResponse }>());
export const assignASubjectToASpecialtyFailure = createAction("[Subject] Assign A Subject To A Specialty Failure", props<{ error: string }>());

