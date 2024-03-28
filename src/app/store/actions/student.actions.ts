import { createAction, props } from '@ngrx/store';
import {ProfileResponse} from "../../models/response/profile-response";
import {Page} from "../../models/page/page";
import {ManagerProfileResponse} from "../../models/response/manager-profile-response";
import {StudentProfileResponse} from "../../models/response/student-profile-response";
import {TeacherProfileResponse} from "../../models/response/teacher-profile-response";


export const loadStudentsBySchoolId = createAction("[Student] Load Students By School Id", props<{ schoolId: number, page: number, size: number }>());
export const loadStudentsBySchoolIdSuccess = createAction("[Student] Load Students By School Id Success", props<{ studentPage: Page<ProfileResponse> }>());
export const loadStudentsBySchoolIdFailure = createAction("[Student] Load Students By School Id Failure", props<{ error: string }>());


export const loadStudentsBySchoolIdWithNoPagination = createAction("[Student] Load Students By School Id With No Pagination", props<{ schoolId: number }>());
export const loadStudentsBySchoolIdWithNoPaginationSuccess = createAction("[Student] Load Students By School Id With No Pagination Success", props<{ studentPage: Page<ProfileResponse> }>());
export const loadStudentsBySchoolIdWithNoPaginationFailure = createAction("[Student] Load Students By School Id With No Pagination Failure", props<{ error: string }>());

export const loadStudentsByClassId = createAction("[Student] Load Students By Class Id", props<{ classId: number, page: number, size: number }>());
export const loadStudentsByClassIdSuccess = createAction("[Student] Load Students By Class Id Success", props<{ studentPage: Page<ProfileResponse> }>());
export const loadStudentsByClassIdFailure = createAction("[Student] Load Students By Class Id Failure", props<{ error: string }>());

export const loadStudentsByClassIdWithNoPagination = createAction("[Student] Load Students By Class Id With No Pagination", props<{ classId: number }>());
export const loadStudentsByClassIdWithNoPaginationSuccess = createAction("[Student] Load Students By Class Id With No Pagination Success", props<{ studentPage: Page<ProfileResponse> }>());
export const loadStudentsByClassIdWithNoPaginationFailure = createAction("[Student] Load Students By Class Id With No Pagination Failure", props<{ error: string }>());
