import {ManagerResponse} from "../models/response/manager-response";
import {StudentResponse} from "../models/response/student-response";
import {TeacherResponse} from "../models/response/teacher-response";

export interface AuthState {
  isLoading: boolean;
  auth: ManagerResponse | StudentResponse | TeacherResponse | null;
  error: string | null;
}

export const initialState: AuthState = {
  isLoading: false,
  auth: null,
  error: null
};
