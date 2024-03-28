import {createAction, props} from "@ngrx/store";
import {ManagerProfileResponse} from "../../models/response/manager-profile-response";
import {TeacherProfileResponse} from "../../models/response/teacher-profile-response";
import {StudentProfileResponse} from "../../models/response/student-profile-response";

export const getLoggedInManager = createAction("[Manager] Get Logged In Manager");
export const getLoggedInManagerSuccess = createAction("[Manager] Get Logged In Manager Success", props<{ auth: ManagerProfileResponse }>());
export const getLoggedInManagerFailure = createAction("[Manager] Get Logged In Manager Failure", props<{ error: string }>());

export const getLoggedInTeacher = createAction("[Teacher] Get Logged In Teacher");
export const getLoggedInTeacherSuccess = createAction("[Teacher] Get Logged In Teacher Success", props<{ auth: TeacherProfileResponse }>());
export const getLoggedInTeacherFailure = createAction("[Teacher] Get Logged In Teacher Failure", props<{ error: string }>());

export const getLoggedInStudent = createAction("[Student] Get Logged In Student");
export const getLoggedInStudentSuccess = createAction("[Student] Get Logged In Student Success", props<{ auth: StudentProfileResponse }>());
export const getLoggedInStudentFailure = createAction("[Student] Get Logged In Student Failure", props<{ error: string }>());
