import { createAction, props } from '@ngrx/store';
import {ProfileResponse} from "../../models/response/profile-response";
import {TeacherClassRequest} from "../../models/request/teacher-class-request";
import {TeacherClassResponse} from "../../models/response/teacher-class-response";
import {Page} from "../../models/page/page";
import {StudentResponse} from "../../models/response/student-response";
import {TeacherResponse} from "../../models/response/teacher-response";

export const loadTeachersBySchoolId = createAction("[Teacher] Load Teachers By School Id", props<{ schoolId: number, page: number, size: number }>());
export const loadTeachersBySchoolIdSuccess = createAction("[Teacher] Load Teachers By School Id Success", props<{ teacherPage: Page<ProfileResponse> }>());
export const loadTeachersBySchoolIdFailure = createAction("[Teacher] Load Teachers By School Id Failure", props<{ error: string }>());

export const loadTeachersBySchoolIdWithNoPagination = createAction("[Teacher] Load Teachers By School Id With No Pagination", props<{ schoolId: number }>());
export const loadTeachersBySchoolIdWithNoPaginationSuccess = createAction("[Teacher] Load Teachers By School Id With No Pagination Success", props<{ teacherPage: Page<ProfileResponse> }>());
export const loadTeachersBySchoolIdWithNoPaginationFailure = createAction("[Teacher] Load Teachers By School Id With No Pagination Failure", props<{ error: string }>());

export const loadTeachersByClassId = createAction("[Teacher] Load Teachers By Class Id", props<{ classId: number, page: number, size: number }>());
export const loadTeachersByClassIdSuccess = createAction("[Teacher] Load Teachers By Class Id Success", props<{ teacherPage: Page<ProfileResponse> }>());
export const loadTeachersByClassIdFailure = createAction("[Teacher] Load Teachers By Class Id Failure", props<{ error: string }>());

export const assignATeacherToAClass = createAction("[Subject] Assign A Teacher T A Class", props<{ teacherClassRequest: TeacherClassRequest }>());
export const assignATeacherToAClassSuccess = createAction("[Subject] Assign A Teacher T A Class Success", props<{ teacherClassResponse: TeacherClassResponse }>());
export const assignATeacherToAClassFailure = createAction("[Subject] Assign A Teacher T A Class Failure", props<{ error: string }>());

export const getLoggedInTeacher = createAction("[Teacher] Get Logged In Teacher");
export const getLoggedInTeacherSuccess = createAction("[Teacher] Get Logged In Teacher Success", props<{ auth: TeacherResponse }>());
export const getLoggedInTeacherFailure = createAction("[Teacher] Get Logged In Teacher Failure", props<{ error: string }>());
