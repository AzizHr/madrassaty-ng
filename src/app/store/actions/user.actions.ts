import { createAction, props } from '@ngrx/store';
import {ManagerResponse} from "../../models/response/manager-response";
import {StudentResponse} from "../../models/response/student-response";
import {TeacherResponse} from "../../models/response/teacher-response";

export const getLoggedInUser = createAction("[User] Get Logged In User");
export const getLoggedInUserSuccess = createAction("[User] Get Logged In User Success", props<{ user: ManagerResponse | StudentResponse | TeacherResponse | null }>());
export const getLoggedInUserFailure = createAction("[User] Get Logged In User Failure", props<{ error: string }>());
