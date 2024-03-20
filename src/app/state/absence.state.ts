import {AbsenceResponse} from "../models/response/absence-response";

export interface AbsenceState {
  isLoading: boolean;
  absences: AbsenceResponse[];
  error: string | null;
}

export const initialState: AbsenceState = {
  isLoading: false,
  absences: null,
  error: null
};
