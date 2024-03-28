import { createAction, props } from '@ngrx/store';
import {YearResponse} from "../../models/response/year-response";
import {YearRequest} from "../../models/request/year-request";

export const loadYearsBySchoolId = createAction("[Year] Load Years By School Id", props<{ schoolId: number }>());
export const loadYearsBySchoolIdSuccess = createAction("[Year] Load Years By School Id Success", props<{ years: YearResponse[] }>());
export const loadYearsBySchoolIdFailure = createAction("[Year] Load Years By School Id Failure", props<{ error: string }>());

export const addYear = createAction("[Year] Add Year", props<{ yearRequest: YearRequest }>());
export const addYearSuccess = createAction("[Year] Add Year Success", props<{ yearResponse: YearResponse }>());
export const addYearFailure = createAction("[Year] Add Year Failure", props<{ error: string }>());
