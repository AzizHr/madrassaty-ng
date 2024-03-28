import { createAction, props } from '@ngrx/store';
import {SchoolRequest} from "../../models/request/school-request";
import {SchoolResponse} from "../../models/response/school-response";

export const addSchool = createAction("[School] Add School", props<{ schoolRequest: SchoolRequest }>());
export const addSchoolSuccess = createAction("[School] Add School Success", props<{ schoolResponse: SchoolResponse }>());
export const addSchoolFailure = createAction("[School] Add School Failure", props<{ error: string }>());

export const loadSchoolByManagerId = createAction("[School] Load School By Manager Id", props<{ managerId: string }>());
export const loadSchoolByManagerIdSuccess = createAction("[School] Load School By Manager Id Success", props<{ schoolResponse: SchoolResponse }>());
export const loadSchoolByManagerIdFailure = createAction("[School] Load School By Manager Id Failure", props<{ error: string }>());
