import {createAction, props} from "@ngrx/store";
import {ManagerResponse} from "../../models/response/manager-response";

export const getLoggedInManager = createAction("[Manager] Get Logged In Manager");
export const getLoggedInManagerSuccess = createAction("[Manager] Get Logged In Manager Success", props<{ auth: ManagerResponse }>());
export const getLoggedInManagerFailure = createAction("[Manager] Get Logged In Manager Failure", props<{ error: string }>());
