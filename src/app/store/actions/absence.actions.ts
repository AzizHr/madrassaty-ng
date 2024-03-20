import {createAction, props} from "@ngrx/store";
import {AbsenceResponse} from "../../models/response/absence-response";

export const loadAbsencesByStudentId = createAction("[Absence] Load Absences By Student Id", props<{ studentId: number }>());
export const loadAbsencesByStudentIdSuccess = createAction("[Absence] Load Absences By Student Id Success", props<{ absences: AbsenceResponse[] }>());
export const loadAbsencesByStudentIdFailure = createAction("[Absence] Load Absences By Student Id Failure", props<{ error: string }>());
