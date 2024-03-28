import { createAction, props } from '@ngrx/store';
import {Page} from "../../models/page/page";
import {StudentResponse} from "../../models/response/student-response";


export const loadStudentsBySchoolId = createAction("[Student] Load Students By School Id", props<{ schoolId: string, page: number, size: number }>());
export const loadStudentsBySchoolIdSuccess = createAction("[Student] Load Students By School Id Success", props<{ studentPage: Page<StudentResponse> }>());
export const loadStudentsBySchoolIdFailure = createAction("[Student] Load Students By School Id Failure", props<{ error: string }>());


export const loadStudentsBySchoolIdWithNoPagination = createAction("[Student] Load Students By School Id With No Pagination", props<{ schoolId: string }>());
export const loadStudentsBySchoolIdWithNoPaginationSuccess = createAction("[Student] Load Students By School Id With No Pagination Success", props<{ studentPage: Page<StudentResponse> }>());
export const loadStudentsBySchoolIdWithNoPaginationFailure = createAction("[Student] Load Students By School Id With No Pagination Failure", props<{ error: string }>());

export const loadStudentsByClassId = createAction("[Student] Load Students By Class Id", props<{ classId: string, page: number, size: number }>());
export const loadStudentsByClassIdSuccess = createAction("[Student] Load Students By Class Id Success", props<{ studentPage: Page<StudentResponse> }>());
export const loadStudentsByClassIdFailure = createAction("[Student] Load Students By Class Id Failure", props<{ error: string }>());

export const loadStudentsByClassIdWithNoPagination = createAction("[Student] Load Students By Class Id With No Pagination", props<{ classId: string }>());
export const loadStudentsByClassIdWithNoPaginationSuccess = createAction("[Student] Load Students By Class Id With No Pagination Success", props<{ studentPage: Page<StudentResponse> }>());
export const loadStudentsByClassIdWithNoPaginationFailure = createAction("[Student] Load Students By Class Id With No Pagination Failure", props<{ error: string }>());
