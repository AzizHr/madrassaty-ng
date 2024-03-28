import {createAction, props} from "@ngrx/store";
import {ManagerResponse} from "../../models/response/manager-response";
import {TeacherResponse} from "../../models/response/teacher-response";
import {StudentResponse} from "../../models/response/student-response";

export const getLoggedInManager = createAction("[Manager] Get Logged In Manager");
export const getLoggedInManagerSuccess = createAction("[Manager] Get Logged In Manager Success", props<{ auth: ManagerResponse }>());
export const getLoggedInManagerFailure = createAction("[Manager] Get Logged In Manager Failure", props<{ error: string }>());

export const getLoggedInTeacher = createAction("[Teacher] Get Logged In Teacher");
export const getLoggedInTeacherSuccess = createAction("[Teacher] Get Logged In Teacher Success", props<{ auth: TeacherResponse }>());
export const getLoggedInTeacherFailure = createAction("[Teacher] Get Logged In Teacher Failure", props<{ error: string }>());

export const getLoggedInStudent = createAction("[Student] Get Logged In Student");
export const getLoggedInStudentSuccess = createAction("[Student] Get Logged In Student Success", props<{ auth: StudentResponse }>());
export const getLoggedInStudentFailure = createAction("[Student] Get Logged In Student Failure", props<{ error: string }>());
